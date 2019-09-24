import React from 'react';
import Card from '../components/Card.js'
import Grafico from '../components/Grafico.js'

export default function Dashboard() {
  return (
    <React.Fragment>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="row">
        <Grafico />
      </div>
    </React.Fragment>
  );
};