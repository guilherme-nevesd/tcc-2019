const BandeiraController = require('../controllers/BandeiraController')
var moment = require('moment');

inicio = moment().format();
fim = moment().format();
BandeiraController.create(inicio,fim)

module.exports = {

  buscaBandeiraDoMes(){
    inicio = moment().format()
    fim = inicio = moment().format()
    setInterval(() => {
      dia = moment().day()
      if( dia === 1){
        BandeiraController.create(inicio,fim)
      }
    },1000)
  }


}