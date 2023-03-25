import { useEffect, useRef } from 'react';
import Chart from 'chart.js';

import { COLORS } from './constants';

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
          mode: 'index',
          callbacks: {
            label: function(context) {
              return context.yLabel.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
            },
          },
        },
        legend: {
          position: "top",
          align: "start",
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
    if (chart.current && Object.keys(data).length > 0) {
      chart.current.data = {
        labels: getLabels(data),
        datasets: getDatasets(data),
      };
      chart.current.update(0);
    }
  }, [data]);

  const getLabels = (data) => {
    return getLargestDataset(data).map((vehicleData) => vehicleData["MesReferencia"]);
  };

  const getDatasets = (data) => {
    let datasets = [];
    const vehicleDatasets = Object.values(data);
    for (let index = 0; index < vehicleDatasets.length; index++) {
      const vehicleDataset = vehicleDatasets[index];
      datasets.push({
        label: `${vehicleDataset[0]['Modelo']} ${vehicleDataset[0]['AnoModelo']}`,
        data: getPrices(vehicleDataset, getLargestDataset(vehicleDatasets)),
        backgroundColor: COLORS[index],
      })
    }
    return datasets;
  };

  const getPrices = (vehicleDataset, largestDataSet) => {
    const prices = vehicleDataset.map((vehicleData) => parseFloat(vehicleData['Valor'].replace('R$ ', '').replace('.', '').replace(',', '.')));
    if (vehicleDataset.length < largestDataSet.length) {
      return Array.from({ length: largestDataSet.length - vehicleDataset.length }, () => ({['Valor']: null})).concat(prices)
    }
    return prices;
  };

  const getLargestDataset = (data) => {
    const vehicleDatasets = Object.values(data);
    return vehicleDatasets.reduce((acc, curr) => curr.length > acc.length ? curr : acc, []);
  };

  return (
    <div className="relative w-960-px">
      <canvas ref={chartRef} />
    </div>
  );
};

export default FipePlot;
