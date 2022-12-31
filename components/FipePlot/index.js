import { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const FipePlot = ({ data }) => {
  const chart = useRef();
  const chartRef = useRef();

  useEffect(() => {
    chart.current = new Chart(chartRef.current, {
      type: 'line',
      data: {},
      options: {
        tooltips: {
          intersect: false,
          callbacks: {
            label: function(context) {
              return context.yLabel.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
            },
          },
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return value.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
              },
            },
          }],
        },
      },
    });
  }, []);

  useEffect(() => {
    if (chart.current && data.length > 0) {
      chart.current.data = {
        labels: data.map((price) => price['MesReferencia']),
        datasets: [{
          data: data.map((price) => parseFloat(price['Valor'].replace('R$ ', '').replace('.', '').replace(',', '.'))),
          backgroundColor: '#3b82f6',
        }],
      };
      chart.current.update(0);
    }
  }, [data]);

  return (
    <div className="relative w-960-px">
      <canvas ref={chartRef} />
    </div>
  );
};

export default FipePlot;
