const express = require('express');
const mongoose = require('mongoose');
const awsIot = require('aws-iot-device-sdk');
const cors = require('cors')
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://guineves:guinevesd@cluster0-i1apd.mongodb.net/medidor?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

// Configuração de autenticação com o protocolo MQTT
const device = awsIot.device({
  keyPath: 'mqtt-cert/13dad8a8ab-private.pem.key',
 certPath: 'mqtt-cert/13dad8a8ab-certificate.pem.crt',
   caPath: 'mqtt-cert/AmazonRootCA1.pem',
 clientId: 'esp32g',
     host: 'a3c7g9oajzpgvh-ats.iot.us-west-2.amazonaws.com'
});


device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('$aws/things/esp32g/shadow/update/delta');
    device.publish('$aws/things/esp32g/shadow/update/delta', JSON.stringify({ test_data: 1}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });



server.listen(3000);