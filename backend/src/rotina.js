const LeituraController = require('./controllers/LeituraController')

module.exports = {

  relogio(){
    setInterval(() => {
      
      let date = new Date;
      let ano = date.getFullYear();
      let mes = date.getMonth()+1;
      let dia = date.getDate();
      let hora = date.getHours()
      let minuto = date.getMinutes()
      let segundo = date.getSeconds()

      data = {
        "ano": ano,
        "mes": mes,
        "dia": dia,
        "horas": hora,
        "minuto": minuto,
        "segundo": segundo
      };

      console.log(data)
    
      if(segundo === 0){
        // console.log('segundo igual a 0')
        // console.log('data normal: ', date)
        // console.log('data subtra: ', new Date(date.setMinutes(minuto-1)))
        // var requisicao = {"req" : {"inicio" : "2019-09-07" , "fim" : "2019-09-08"}}
        LeituraController.getIntervalo("2019-09-07", "2019-09-08")
        // console.log(response)
      }




    
    },1000)
  },
     
  testeSendMqtt(device){
    setInterval(() => {

      let randon = Math.random();
      console.log(randon.toFixed(2));
      let message = { "dispositivo" : " Eps32 ", "corrente" : `${randon.toFixed(2)}`  }

      device.publish('$aws/things/esp32g/shadow/update/delta', JSON.stringify({ message: message}));

    }, 5000);
  },


  
}
