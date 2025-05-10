import React from 'react';

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
    }[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.datasets[0].data);
  const minValue = Math.min(...data.datasets[0].data);
  const range = maxValue - minValue;
  const pointCount = data.labels.length;

  // Generar puntos para la línea
  const points = data.datasets[0].data.map((value, index) => {
    const x = 10 + (index * (80 / (pointCount - 1)));
    const y = 50 - ((value - minValue) / range) * 40;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-80">
      <svg viewBox="0 0 100 60" className="w-full h-full">
        {/* Eje X */}
        <line x1="5" y1="50" x2="95" y2="50" stroke="#999" strokeWidth="0.5" />
        
        {/* Eje Y */}
        <line x1="5" y1="5" x2="5" y2="50" stroke="#999" strokeWidth="0.5" />
        
        {/* Marcas del eje Y */}
        {[0, 25, 50, 75, 100].map((tick) => (
          <g key={tick}>
            <line x1="5" y1={50 - (tick * 0.45)} x2="95" y2={50 - (tick * 0.45)} stroke="#eee" strokeWidth="0.2" />
            <text 
              x="3" 
              y={50 - (tick * 0.45) + 1} 
              textAnchor="end" 
              dominantBaseline="middle" 
              style={{ fontSize: '0.75rem', fill: '#6b7280' }}
            >
              {Math.round(minValue + (tick / 100) * range)}
            </text>
          </g>
        ))}

        {/* Línea */}
        <polyline
          fill="none"
          stroke={data.datasets[0].borderColor}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
        />

        {/* Puntos */}
        {data.datasets[0].data.map((value, index) => {
          const x = 10 + (index * (80 / (pointCount - 1)));
          const y = 50 - ((value - minValue) / range) * 40;
          
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="2"
                fill={data.datasets[0].borderColor}
                stroke="white"
                strokeWidth="1"
              />
              <text
                x={x}
                y={y - 5}
                textAnchor="middle"
                dominantBaseline="auto"
                style={{ fontSize: '0.75rem', fill: '#1f2937', fontWeight: 'bold' }}
              >
                {value}
              </text>
              <text
                x={x}
                y="55"
                textAnchor="middle"
                dominantBaseline="hanging"
                style={{ fontSize: '0.75rem', fill: '#4b5563' }}
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

export default LineChart;