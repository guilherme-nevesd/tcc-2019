const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const LeituraController = require('./controllers/LeituraController')
const BandeiraController = require('./controllers/BandeiraController')
const ConsumoService = require('./services/consumo_service')
const BandeiraService = require('./services/bandeira_service')
const GastoService = require('./services/gasto_service')
const Mqtt = require('./mqtt');
var moment = require('moment')

// mongoose.connect('mongodb+srv://guineves:guinevesd@cluster0-i1apd.mongodb.net/medidor?retryWrites=true&w=majority', {
//   useNewUrlParser: true
// });

mongoose.connect('mongodb://localhost:27017/db_tcc_medicoes')

device = Mqtt.configure();
Mqtt.connect(device);

// Variaveis globais
var consumoDiaKwh = 0;
var gastoDia = 0;
var tipoBandeira = '';

// Inicializa rotinas / services
ConsumoService.testeSendMqtt(device); // Teste mqtt
ConsumoService.calculaConsumoMinuto();
ConsumoService.calculaCosumoDoDia();
BandeiraService.buscaBandeiraDoMes()
BandeiraService.bandeiraCorrente()

// Atualiza variaveis
setInterval(() => {
  tipoBandeira = BandeiraService.getTipoBandeira();
  consumoDiaKwh = ConsumoService.getConsumoDia() / 1000;
  gastoDia = GastoService.calculaGastoDiario(consumoDiaKwh, tipoBandeira );
},3000)

io.on('connection', socket => { 
  console.log('==== nova conexão ====', socket.id);  

  // Emite mensagens a cada recebimento via protocolo mqtt
  device
  .on('message', function(topic, payload) {
    if(!!JSON.parse(payload.toString()).message){
      console.log('... io enviado para: ', socket.id)
      socket.emit('leitura', JSON.parse(payload.toString()))
    }
  });
  
  setInterval(()=>{
    socket.emit('gasto', gastoDia)
    socket.emit('consumo', consumoDiaKwh)
    socket.emit('info', [127,tipoBandeira])
  },1000)

  socket.on('controle', message => {
    if(message){
      console.log('LIGAR CIRCUITO')
      device.publish('$aws/things/esp32g/shadow/update/delta', JSON.stringify({ controle: 1}));
    } else {
      console.log('DESLIGAR CIRCUITO')
    }
  });
  
});

// Salva no banco cada leitura recebida via mqtt
device
.on('message', function(topic, payload) {
  if(!!JSON.parse(payload.toString()).message){
    LeituraController.create(JSON.parse(payload.toString()))
  } else{
    console.log('asdfasjkdhfaslkdfhasldkfjhasdlfjkahsdlfjkahsdlfkjashdlfakjsh')
  }
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
