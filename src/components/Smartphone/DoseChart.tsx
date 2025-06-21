import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  ChartOptions
} from 'chart.js';

// Registrar componentes necesarios
Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

interface DoseChartProps {
  title?: string;
  data?: ChartData<'line'>;
}

const defaultData: ChartData<'line'> = {
  labels: ['04/05', '05/05', '06/05', '07/05', '08/05'],
  datasets: [
    {
      label: 'Hora de toma',
      data: [21, 22, 21.5, 21, 22],
      borderColor: 'rgba(223, 122, 146, 1)',
      backgroundColor: 'rgba(255, 208, 230, 0.3)',
      tension: 0.4,
      fill: true,
      pointBackgroundColor: 'rgba(243, 111, 157, 1)',
      pointRadius: 5,
    },
  ],
};

const DoseChart: React.FC<DoseChartProps> = ({
  title = 'Historial de tomas recientes',
  data = defaultData
}) => {
  const options = useMemo<ChartOptions<'line'>>(() => ({
    responsive: true,
    animation: {
      duration: 1000,
    },
    plugins: {
      legend: { display: false },
      tooltip: { 
        enabled: true,
        mode: 'index',
        intersect: false 
      },
    },
    scales: {
      y: {
        min: 20,
        max: 23,
        ticks: {
          stepSize: 1,
          callback: (value: number | string) => 
            typeof value === 'number' ? `${value}:00` : value,
        },
        grid: { 
          color: 'rgba(223, 122, 146, 0.1)',
          drawOnChartArea: true,
        },
      },
      x: {
        grid: { display: false },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
  }), []);

  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
      <div className="font-bold text-lg text-gray-800 mb-2">{title}</div>
      <Line 
        data={data} 
        options={options}
        fallbackContent={<p>Cargando gráfico...</p>}
      />
    </div>
  );
};

export default React.memo(DoseChart);