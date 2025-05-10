import React from 'react';

export const PieChartMobile: React.FC<{
  data: number[];
  labels?: string[];
  colors: string[];
}> = ({ data, labels, colors }) => {
  const total = data.reduce((sum, value) => sum + value, 0);
  let cumulativePercent = 0;

  return (
    <div className="relative h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-40 h-40">
        {data.map((value, index) => {
          const percent = (value / total) * 100;
          const startX = 50 + 40 * Math.cos(2 * Math.PI * cumulativePercent / 100);
          const startY = 50 + 40 * Math.sin(2 * Math.PI * cumulativePercent / 100);
          cumulativePercent += percent;
          const endX = 50 + 40 * Math.cos(2 * Math.PI * cumulativePercent / 100);
          const endY = 50 + 40 * Math.sin(2 * Math.PI * cumulativePercent / 100);

          return (
            <path
              key={index}
              d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${percent > 50 ? 1 : 0} 1 ${endX} ${endY} Z`}
              fill={colors[index % colors.length]}
            />
          );
        })}
      </svg>
      
      {labels && (
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-2 px-4">
          {labels.map((label, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-2 h-2 mr-1 rounded-full" 
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// BarChart optimizado para móvil
export const BarChartMobile: React.FC<{
  data: number[];
  labels: string[];
  color: string;
}> = ({ data, labels, color }) => {
  const maxValue = Math.max(...data);
  const barWidth = 100 / data.length - 5;

  return (
    <svg viewBox="0 0 100 50" className="w-full h-full">
      {data.map((value, index) => {
        const barHeight = (value / maxValue) * 40;
        const xPos = 5 + (index * (100 / data.length));
        
        return (
          <g key={index}>
            <rect
              x={xPos}
              y={45 - barHeight}
              width={barWidth}
              height={barHeight}
              fill={color}
              rx="2"
            />
            <text
              x={xPos + barWidth / 2}
              y={43 - barHeight}
              textAnchor="middle"
              className="text-[5px] fill-white font-bold"
            >
              {value}
            </text>
            <text
              x={xPos + barWidth / 2}
              y="48"
              textAnchor="middle"
              className="text-[6px] fill-gray-600"
            >
              {labels[index]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// LineChart para móvil
export const LineChartMobile: React.FC<{
  data: number[];
  labels: string[];
  color: string;
}> = ({ data, labels, color }) => {
  const maxValue = Math.max(...data);
  const pointCount = data.length;

  const points = data.map((value, index) => {
    const x = 10 + (index * (80 / (pointCount - 1)));
    const y = 45 - (value / maxValue) * 40;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 100 50" className="w-full h-full">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        points={points}
      />
      
      {data.map((value, index) => {
        const x = 10 + (index * (80 / (pointCount - 1)));
        const y = 45 - (value / maxValue) * 40;
        
        return (
          <g key={index}>
            <circle
              cx={x}
              cy={y}
              r="2"
              fill={color}
              stroke="white"
              strokeWidth="1"
            />
            <text
              x={x}
              y="48"
              textAnchor="middle"
              className="text-[6px] fill-gray-600"
            >
              {labels[index]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};