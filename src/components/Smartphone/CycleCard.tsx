// components/CycleCard.tsx
import React from 'react';
import CustomButton from './CustomButton';

interface CycleCardProps {
  title: string;
  status: string;
  startDate: string;
  endDate: string;
  cardTitle: string;
  cardValue: string;
  cardUnit: string;
  buttonText: string;
  cardBackground?: string;
  onButtonClick?: () => void;
}

const CycleCard: React.FC<CycleCardProps> = ({
  title,
  status,
  startDate,
  endDate,
  cardTitle,
  cardValue,
  cardUnit,
  buttonText,
  cardBackground = 'var(--color-gradient-1)',
  onButtonClick
}) => {
  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
      <div className="flex items-start justify-between gap-4">
        {/* Información del ciclo */}
        <div className="flex-1">
          <div className="text-sm text-gray-800 font-semibold">
            {title}:&nbsp;<span className="font-bold text-gray-900"><br />{status}</span>
          </div>
          <div className="text-xs text-gray-700 mt-1">{startDate}</div>
          <div className="text-xs text-gray-700">{endDate}</div>
        </div>

        {/* Card pequeño a la derecha */}
        <div className="rounded-lg px-2 py-2 text-center w-32 leading-tight" style={{ background: cardBackground }}>
          <span className="text-xs text-gray-700 leading-none block">{cardTitle}:</span>
          <div className="text-xs font-bold mb-1 leading-none" style={{ color: 'var(--color-primary)' }}>
            {cardValue} {cardUnit}
          </div>
          <CustomButton
            size="small"
            fill="outline"
            onClick={onButtonClick}
            style={{
              fontSize: '10px',
              height: '26px',
              padding: '0 8px',
            }}
          >
            {buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CycleCard;