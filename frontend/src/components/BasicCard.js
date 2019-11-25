import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'

export default function Card() {
  const socket = io('localhost:3333');  

  useEffect(() => {

    


    return () => {
      socket.disconnect()
    }
  }, []);

  var ligarCircuito = function(){
    socket.emit('controle', true)
    console.log('ligou circuito')
  }

  var desligarCircuito = function(){
    socket.emit('controle', false)
    console.log('desligou circuito')
  }


  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
      </div>
      <div className="card-body">

          <div className="col-lg-12 mb-4">
              <div className="card bg-success text-white shadow">
                <div className="card-body">
                  Circuito ligado!
                  <div className="text-white-50 small"></div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block mt-2"
                onClick={ligarCircuito}>
                Ligar circuito
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg btn-block"
                onClick={desligarCircuito}>
                Desligar circuito
              </button>
          </div>

      </div>
    </div>

  );
};