import React, { useEffect, useState } from 'react';
import GraficoHistorico from '../components/GraficoHistorico.js'
import Tabela from '../components/Tabela.js'
const axios = require('axios');

export default function Historico() {
  const [dadosCorrente, setDadosCorrente] = useState({})
  const [dadosConsumo, setDadosConsumo] = useState({})

  useEffect(() => {
    var mounted = true
    var getLeituras = async function(){
      await axios.get('http://localhost:3333/leituras').then(response => {
        // leituras = response.data
        if(mounted){
          setDadosCorrente(response.data)
        }
      });
    }

    var getConsumo = async function(){
      await axios.get('http://localhost:3333/consumos').then(response => {
        // leituras = response.data
        if(mounted){
          setDadosConsumo(response.data)
        }
      });
    }

    getLeituras()
    getConsumo()
    
    return () => {
      mounted = false
    }
  }, []);


   
  // console.log('dados  ', dadosConsumo)

  
  return (
    <React.Fragment>
      <div className="row">
        <GraficoHistorico leituras = {dadosCorrente} consumos = {dadosConsumo} />
      </div>
      <Tabela dadosLeituras = {dadosCorrente} dadosConsumos = {dadosConsumo} />
    </React.Fragment>
  );
};