import React from 'react';

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.datasets[0].data);
  const barWidth = 100 / data.labels.length - 2;

  return (
    <div className="w-full h-64">
      <svg viewBox="0 0 100 60" className="w-full h-full">
        {/* Eje X */}
        <line x1="5" y1="50" x2="95" y2="50" stroke="#999" strokeWidth="0.5" />
        
        {/* Eje Y */}
        <line x1="5" y1="5" x2="5" y2="50" stroke="#999" strokeWidth="0.5" />
        
        {/* Marcas del eje Y */}
        {[0, 25, 50, 75, 100].map((tick) => (
          <g key={tick}>
            <line x1="5" y1={50 - (tick * 0.45)} x2="95" y2={50 - (tick * 0.45)} stroke="#eee" strokeWidth="0.2" />
            <text x="3" y={50 - (tick * 0.45) + 1} textAnchor="end" dominantBaseline="middle" className="text-xs fill-gray-500">
              {Math.round((tick / 100) * maxValue)}
            </text>
          </g>
        ))}

        {/* Barras */}
        {data.datasets[0].data.map((value, index) => {
          const barHeight = (value / maxValue) * 45;
          const xPos = 10 + (index * (100 / data.labels.length));
          
          return (
            <g key={index}>
              <rect
                x={xPos}
                y={50 - barHeight}
                width={barWidth}
                height={barHeight}
                fill={data.datasets[0].backgroundColor}
                rx="2"
                ry="2"
              />
              <text
                x={xPos + barWidth / 2}
                y={50 - barHeight - 2}
                textAnchor="middle"
                dominantBaseline="auto"
                className="text-xs fill-gray-800 font-bold"
              >
                {value}
              </text>
              <text
                x={xPos + barWidth / 2}
                y="55"
                textAnchor="middle"
                dominantBaseline="hanging"
                className="text-xs fill-gray-600"
              >
                {data.labels[index]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default BarChart;