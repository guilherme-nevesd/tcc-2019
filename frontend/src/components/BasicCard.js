import React from 'react';

export default function Card() {
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
                  <div className="text-white-50 small">#1cc88a</div>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-lg btn-block mt-2">Ligar circuito</button>
              <button type="button" className="btn btn-secondary btn-lg btn-block">Desligar circuito</button>
          </div>

      </div>
    </div>

  );
};