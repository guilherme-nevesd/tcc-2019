const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const LeituraController = require('./controllers/LeituraController')
const ConsumoController = require('./controllers/ConsumoController')
const Rotina = require('./rotina')
const Mqtt = require('./mqtt');

mongoose.connect('mongodb+srv://guineves:guinevesd@cluster0-i1apd.mongodb.net/medidor?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

device = Mqtt.configure();
Mqtt.connect(device);


io.on('connection', socket => { 
  console.log('==== nova conexão ====', socket.id);  

  device
  .on('message', function(topic, payload) {
    console.log('... io enviado para: ', socket.id)
    socket.emit('leitura', JSON.parse(payload.toString()))
    
  });

});

device
  .on('message', function(topic, payload) {
    LeituraController.create(JSON.parse(payload.toString()))
  });



// Rotina.testeSendMqtt(device); // Teste mqtt

Rotina.relogio();

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
