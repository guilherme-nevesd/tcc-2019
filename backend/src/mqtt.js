const awsIot = require('aws-iot-device-sdk');

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
