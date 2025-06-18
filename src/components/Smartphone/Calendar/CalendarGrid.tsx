import React from 'react';
import { dayNames } from '../../../utils/dateUtils';
import CalendarDay from './CalendarDay';

interface CalendarGridProps {
  days: (number | null)[];
  currentDate: Date;
  pillRecords: PillRecord[];
  onDayClick: (day: number) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  days, 
  currentDate, 
  pillRecords, 
  onDayClick 
}) => {
  return (
    <div className="bg-pink-100 mx-4 mt-4 rounded-xl shadow-lg overflow-hidden p-2">
      {/* Días de la semana */}
      <div className="grid grid-cols-7 border-t border-gray-200">
        {dayNames.map(day => (
          <div key={day} className="p-3 text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Días del mes */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <CalendarDay
            key={index}
            day={day}
            currentDate={currentDate}
            pillRecords={pillRecords}
            onDayClick={onDayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;