import React from 'react';
import Grafico from '../components/Grafico.js'
import Tabela from '../components/Tabela.js'

export default function Historico() {
  return (
    <React.Fragment>
      <div className="row">
        <Grafico />
      </div>
      <Tabela />
    </React.Fragment>
  );
};