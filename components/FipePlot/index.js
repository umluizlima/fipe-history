import { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const FipePlot = ({ data }) => {
  const chart = useRef();
  const chartRef = useRef();

  useEffect(() => {
    chart.current = new Chart(chartRef.current, {
      type: 'line',
      data: {},
    });
  }, []);

  useEffect(() => {
    if (chart.current && data.length > 0) {
      chart.current.data = {
        labels: data.map((price) => price['MesReferencia']),
        datasets: [{
          label: data[0]['Modelo'],
          data: data.map((price) => parseFloat(price['Valor'].replace('R$ ', '').replace('.', '').replace(',', '.'))),
          backgroundColor: '#4e51fd'
        }],
      };
      chart.current.update(0);
    }
  }, [data]);

  return (
    <canvas ref={chartRef} />
  );
};

export default FipePlot;
