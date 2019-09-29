import React, { useEffect, useState } from 'react';
import api from '../services/api'
import io from 'socket.io-client'

export default function CardRealTime( { params } ) {
  const [corrente, setCorrente] = useState('')
  const [potencia, setPotencia] = useState('')

  useEffect(() => {
    const socket = io('http://localhost:3333');
    socket.on('leitura', message => {

      console.log(message["message"]);
      console.log(message);
      setCorrente(message["message"]);
      message = '';
    })
  });

  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Tempo Real</div>
              <div className="h5 mb-0 font-weight-bold text-gray-700">
                { corrente } A &nbsp; | &nbsp;{ potencia } W/h
              </div>
            </div>
            <div className="col-auto">
              <i className="far fa-clock fa-3x text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};