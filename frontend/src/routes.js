import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.js'
import Historico from './pages/Historico.js'
import Controle from './pages/Controle.js'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/dashboardd" exact component={Dashboard} />
      <Route path="/historico" exact component={Historico} />
      <Route path="/controle" exact component={Controle} />
    </BrowserRouter>
  );
};