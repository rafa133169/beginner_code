import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

interface ChartBaseProps {
  labels?: string[];
}

interface PieChartProps extends ChartBaseProps {
  data: number[];
  colors: string[];
}

interface BarLineChartProps extends ChartBaseProps {
  data: number[];
  labels: string[];
  color: string;
}

const PieChartMobileComponent: React.FC<PieChartProps> = ({ data, labels, colors }) => {
  const paths = useMemo(() => {
    let cumulativePercent = 0;
    const totalValue = data.reduce((sum, value) => sum + value, 0);
    
    return data.map((value, index) => {
      const percent = (value / totalValue) * 100;
      const startX = 50 + 40 * Math.cos(2 * Math.PI * cumulativePercent / 100);
      const startY = 50 + 40 * Math.sin(2 * Math.PI * cumulativePercent / 100);
      cumulativePercent += percent;
      const endX = 50 + 40 * Math.cos(2 * Math.PI * cumulativePercent / 100);
      const endY = 50 + 40 * Math.sin(2 * Math.PI * cumulativePercent / 100);

      return {
        path: `M 50 50 L ${startX} ${startY} A 40 40 0 ${percent > 50 ? 1 : 0} 1 ${endX} ${endY} Z`,
        color: colors[index % colors.length],
        key: `pie-${index}`
      };
    });
  }, [data, colors]);

  return (
    <div className="relative h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-40 h-40" aria-label="Gráfico circular">
        {paths.map(({ path, color, key }) => (
          <path key={key} d={path} fill={color} role="graphics-symbol" />
        ))}
      </svg>
      
      {labels && (
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-2 px-4">
          {labels.map((label, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div 
                className="w-2 h-2 mr-1 rounded-full" 
                style={{ backgroundColor: colors[index % colors.length] }}
                aria-hidden="true"
              />
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

PieChartMobileComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export const PieChartMobile = React.memo(PieChartMobileComponent);

const BarChartMobileComponent: React.FC<BarLineChartProps> = ({ data, labels, color }) => {
  const bars = useMemo(() => {
    const maxValue = Math.max(...data);
    const barWidth = 100 / data.length - 5;
    
    return data.map((value, index) => ({
      xPos: 5 + (index * (100 / data.length)),
      barHeight: (value / maxValue) * 40,
      barWidth,
      value,
      label: labels[index],
      key: `bar-${index}`
    }));
  }, [data, labels]);

  return (
    <svg viewBox="0 0 100 50" className="w-full h-full" aria-label="Gráfico de barras">
      {bars.map(({ xPos, barHeight, barWidth, value, label, key }) => (
        <g key={key}>
          <rect
            x={xPos}
            y={45 - barHeight}
            width={barWidth}
            height={barHeight}
            fill={color}
            rx="2"
            role="graphics-symbol"
          />
          <text
            x={xPos + barWidth / 2}
            y={43 - barHeight}
            textAnchor="middle"
            className="text-[5px] fill-white font-bold"
            aria-hidden="true"
          >
            {value}
          </text>
          <text
            x={xPos + barWidth / 2}
            y="48"
            textAnchor="middle"
            className="text-[6px] fill-gray-600"
            aria-hidden="true"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
};

BarChartMobileComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  color: PropTypes.string.isRequired,
};

export const BarChartMobile = React.memo(BarChartMobileComponent);

const LineChartMobileComponent: React.FC<BarLineChartProps> = ({ data, labels, color }) => {
  const { points, circles } = useMemo(() => {
    const maxValue = Math.max(...data);
    const pointCount = data.length;
    
    const pointsStr = data.map((value, index) => {
      const x = 10 + (index * (80 / (pointCount - 1)));
      const y = 45 - (value / maxValue) * 40;
      return `${x},${y}`;
    }).join(' ');

    const circlesData = data.map((value, index) => {
      const x = 10 + (index * (80 / (pointCount - 1)));
      const y = 45 - (value / maxValue) * 40;
      return { x, y, label: labels[index], key: `line-${index}` };
    });

    return { points: pointsStr, circles: circlesData };
  }, [data, labels]);

  return (
    <svg viewBox="0 0 100 50" className="w-full h-full" aria-label="Gráfico de líneas">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        points={points}
        role="graphics-symbol"
      />
      
      {circles.map(({ x, y, label, key }) => (
        <g key={key}>
          <circle
            cx={x}
            cy={y}
            r="2"
            fill={color}
            stroke="white"
            strokeWidth="1"
            role="graphics-symbol"
          />
          <text
            x={x}
            y="48"
            textAnchor="middle"
            className="text-[6px] fill-gray-600"
            aria-hidden="true"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
};

LineChartMobileComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  color: PropTypes.string.isRequired,
};

export const LineChartMobile = React.memo(LineChartMobileComponent);