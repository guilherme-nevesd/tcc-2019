import React from 'react';
import Form from '../components/Form.js'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import io from 'socket.io-client'
const socket = io('localhost:3333');

export default function Cadastro() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
      <Form />
      </div>
    </div>
  );
};