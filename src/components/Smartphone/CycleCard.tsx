import React, { memo } from 'react';
import CustomButton from './CustomButton';
import PropTypes from 'prop-types';

type CycleStatus = 'active' | 'inactive' | 'pending' | 'completed'; // Ajusta según tus necesidades

interface CycleCardProps {
  title: string;
  status: CycleStatus;
  startDate: string;
  endDate: string;
  cardTitle: string;
  cardValue: string;
  cardUnit: string;
  buttonText: string;
  cardBackground?: string;
  onButtonClick?: () => void;
}

const CycleCard:  React.FC<CycleCardProps> & { defaultProps?: Partial<CycleCardProps>} = ({
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
    <div 
      className="cycle-card bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]"
      role="region"
      aria-label={`${title} information`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Información del ciclo */}
        <div className="flex-1">
          <h3 className="text-sm text-gray-800 font-semibold">
            {title}:&nbsp;
            <span className="font-bold text-gray-900 block">{status}</span>
          </h3>
          <div className="text-xs text-gray-700 mt-1">{startDate}</div>
          <div className="text-xs text-gray-700">{endDate}</div>
        </div>

        {/* Card pequeño a la derecha */}
        <div 
          className="cycle-card__metric rounded-lg px-2 py-2 text-center w-32 leading-tight"
          style={{ background: cardBackground }}
          aria-label={`${cardTitle}: ${cardValue} ${cardUnit}`}
        >
          <span className="text-xs text-gray-700 leading-none block">{cardTitle}:</span>
          <div 
            className="text-xs font-bold mb-1 leading-none" 
            style={{ color: 'var(--color-primary)' }}
            aria-live="polite"
          >
            {cardValue} {cardUnit}
          </div>
          <CustomButton
            size="small"
            fill="outline"
            onClick={onButtonClick}
            className="cycle-card__button"
            aria-label={`Action for ${cardTitle}`}
          >
            {buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

// Prop types para validación en desarrollo
CycleCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['active', 'inactive', 'pending', 'completed']).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardValue: PropTypes.string.isRequired,
  cardUnit: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  cardBackground: PropTypes.string,
  onButtonClick: PropTypes.func,
};

// Default props
CycleCard.defaultProps = {
  cardBackground: 'var(--color-gradient-1)',
};

export default memo(CycleCard);