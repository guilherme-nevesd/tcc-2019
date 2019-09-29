import React from 'react';
import CardRealTime from '../components/CardRealTime.js'
import CardConsumo from '../components/CardConsumo.js'
import CardGasto from '../components/CardGasto.js'
import CardInfo from '../components/CardInfo.js'
import Grafico from '../components/Grafico.js'

export default function Dashboard() {

  return (
    <React.Fragment>
      <div className="row">
        <CardRealTime />
        <CardConsumo />
        <CardGasto />
        <CardInfo />
      </div>
      <div className="row">
        <Grafico />
      </div>
    </React.Fragment>
  );
};