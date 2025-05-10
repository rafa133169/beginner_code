import React from 'react';

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
  let cumulativePercent = 0;

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-48 h-48 sm:w-64 sm:h-64">
        {data.datasets[0].data.map((value, index) => {
          const percent = (value / total) * 100;
          const startX = 50 + 50 * Math.cos(2 * Math.PI * cumulativePercent / 100);
          const startY = 50 + 50 * Math.sin(2 * Math.PI * cumulativePercent / 100);
          cumulativePercent += percent;
          const endX = 50 + 50 * Math.cos(2 * Math.PI * cumulativePercent / 100);
          const endY = 50 + 50 * Math.sin(2 * Math.PI * cumulativePercent / 100);

          const largeArcFlag = percent > 50 ? 1 : 0;

          return (
            <path
              key={index}
              d={`M 50 50 L ${startX} ${startY} A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
              fill={data.datasets[0].backgroundColor[index]}
              stroke="white"
              strokeWidth="1"
            />
          );
        })}
        <circle cx="50" cy="50" r="30" fill="white" />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-lg font-bold">
          {total}
        </text>
      </svg>

      <div className="absolute bottom-0 w-full flex justify-center space-x-4">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-4 h-4 mr-2 rounded-full" 
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            ></div>
            <span className="text-xl text-gray-800">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;