const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const LeituraController = require('./controllers/LeituraController')
const ConsumoService = require('./services/consumo_service')
const BandeiraController = require('./controllers/BandeiraController')
const BandeiraService = require('./services/bandeira_service')
const Mqtt = require('./mqtt');
var moment = require('moment')

var consumoDia = 0;

// mongoose.connect('mongodb+srv://guineves:guinevesd@cluster0-i1apd.mongodb.net/medidor?retryWrites=true&w=majority', {
//   useNewUrlParser: true
// });

mongoose.connect('mongodb://localhost:27017/db_tcc_medicoes')

device = Mqtt.configure();
Mqtt.connect(device);

// Atualiza consumo diario
setInterval(() => {
  consumoDia = ConsumoService.getConsumoDia();
},5000)


io.on('connection', socket => { 
  console.log('==== nova conexão ====', socket.id);  

  // Emite mensagens a cada recebimento via protocolo mqtt
  device
  .on('message', function(topic, payload) {
    console.log('... io enviado para: ', socket.id)
    socket.emit('leitura', JSON.parse(payload.toString()))
    socket.emit('consumo', consumoDia)
  });
  
});

// Salva no banco cada leitura recebida via mqtt
device
.on('message', function(topic, payload) {
  LeituraController.create(JSON.parse(payload.toString()))
});


// Inicializa rotinas / services
// ConsumoService.testeSendMqtt(device); // Teste mqtt
// ConsumoService.calculaConsumoMinuto();
// ConsumoService.calculaCosumoDoDia();
BandeiraService.buscaBandeiraDoMes()


app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
