import React from 'react';
import Highcharts from 'highcharts';

export default function Grafico() {

  

  Highcharts.chart('myAreaChart', {
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

  })



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
            <div id="myAreaChart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};