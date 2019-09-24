import React from 'react';

export default function Grafico() {
  return (
    <div className="col-xl-12 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Gráfico de cosumo</h6>
          <div className="dropdown no-arrow">
            <a href="/#" className="btn btn-light btn-icon-split btn-sm">
              <span className="text">Consumo</span>
            </a>
            <a href="/#" className="btn btn-light btn-icon-split btn-sm">
              <span className="text">Gastos</span>
            </a>
            <a href="/#" className="btn btn-light btn-icon-split btn-sm">
              <span className="text">Corrente</span>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area">
            <canvas id="myAreaChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};