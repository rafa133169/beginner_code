// components/DoseChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

interface DoseChartProps {
  title?: string;
  data?: {
    labels: string[];
    datasets: any[];
  };
}

const defaultData = {
  labels: ['04/05', '05/05', '06/05', '07/05', '08/05'],
  datasets: [
    {
      label: 'Hora de toma',
      data: [21, 22, 21.5, 21, 22],
      borderColor: 'rgba(223, 122, 146, 1)', // #DF7A92
      backgroundColor: 'rgba(255, 208, 230, 0.3)', // #FFD0E6
      tension: 0.4,
      fill: true,
      pointBackgroundColor: 'rgba(243, 111, 157, 1)', // #F36F9D
      pointRadius: 5,
    },
  ],
};

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    y: {
      min: 20,
      max: 23,
      ticks: {
        stepSize: 1,
        callback: (value: number) => `${value}:00`,
      },
      grid: { color: 'rgba(223, 122, 146, 0.1)' },
    },
    x: {
      grid: { display: false },
    },
  },
};

const DoseChart: React.FC<DoseChartProps> = ({
  title = 'Historial de tomas recientes',
  data = defaultData
}) => {
  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
      <div className="font-bold text-lg text-gray-800 mb-2">{title}</div>
      <Line data={data} options={defaultOptions} />
    </div>
  );
};

export default DoseChart;