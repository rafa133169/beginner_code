import React from 'react';
import { IonButton } from '@ionic/react';
import { monthNames } from '../../../utils/dateUtils';

interface CalendarHeaderProps {
  currentDate: Date;
  onMonthChange: (direction: 'prev' | 'next') => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, onMonthChange }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mb-4 border-b-4 border-black">
      <IonButton 
        fill="clear" 
        onClick={() => onMonthChange('prev')} 
        className="text-black text-2xl"
      >
        <span className="text-2xl">&laquo;</span>
      </IonButton>

      <div className="bg-pink-400 text-black font-black tracking-tighter rounded-full px-6 py-2 text-xl border border-black shadow-md">
        {monthNames[currentDate.getMonth()].toUpperCase()}
      </div>

      <IonButton 
        fill="clear" 
        onClick={() => onMonthChange('next')} 
        className="text-black text-2xl"
      >
        <span className="text-2xl">&raquo;</span>
      </IonButton>
    </div>
  );
};

export default CalendarHeader;