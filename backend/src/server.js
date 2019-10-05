const express = require('express');
const mongoose = require('mongoose');
const awsIot = require('aws-iot-device-sdk');
const cors = require('cors')
const routes = require('./routes');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://guineves:guinevesd@cluster0-i1apd.mongodb.net/medidor?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

// Configuração de autenticação com o protocolo MQTT
const device = awsIot.device({
  keyPath: 'mqtt-cert/13dad8a8ab-private.pem.key',
 certPath: 'mqtt-cert/13dad8a8ab-certificate.pem.crt',
   caPath: 'mqtt-cert/AmazonRootCA1.pem',
 clientId: 'esp32g',
     host: 'a3c7g9oajzpgvh-ats.iot.us-west-2.amazonaws.com'
});

// Conexão ao protocolo Mqtt
device
  .on('connect', function() {
    console.log('... conectado a um mqtt');
    device.subscribe('$aws/things/esp32g/shadow/update/delta');

    // função apenas para teste
    setInterval(() => {
      let randon = Math.random();
      console.log(randon.toFixed(2));
      device.publish('$aws/things/esp32g/shadow/update/delta', JSON.stringify({ message: randon.toFixed(2)}));
    }, 2000);

  });

// Escutando o evento message mqtt
device
  .on('message', function(topic, payload) {
    console.log('... message salva no banco')
    // console.log('message', topic, payload.toString());    
  });

// Iniciando conexão com o websocket 
io.on('connection', socket => {
  console.log('==== nova conexão ====', socket.id);  

  device
  .on('message', function(topic, payload) {
    console.log('... io enviado para: ', socket.id)
    socket.emit('leitura', JSON.parse(payload.toString()))
    
  });

  socket.on('disconnect', function() {
    console.log("==== desconectou ====", socket.id);
    socket.disconnect(true)
  });


});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
