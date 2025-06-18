import React from 'react';
import { formatDateString } from '../../../utils/dateUtils';
import { PillRecord } from './types';

interface CalendarDayProps {
  day: number | null;
  currentDate: Date;
  pillRecords: PillRecord[];
  onDayClick: (day: number) => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ 
  day, 
  currentDate, 
  pillRecords, 
  onDayClick 
}) => {
  if (day === null) {
    return <div className="h-20 bg-pink-200 rounded-md shadow-md" />;
  }

  const dateString = formatDateString(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    day
  );
  const pillStatus = pillRecords.find(record => record.date === dateString);
  const isToday = dateString === new Date().toISOString().split('T')[0];

  const getIcon = () => {
    if (!pillStatus) return null;
    if (pillStatus.bleeding) return '🩸';
    if (pillStatus.missed) return '📄';
    if (pillStatus.taken) return '🟠';
    return '⚪';
  };

  return (
    <div
      className={`h-20 bg-pink-200 rounded-md shadow-md relative border border-pink-300 ${
        isToday ? 'ring-2 ring-blue-400' : ''
      }`}
      onClick={() => onDayClick(day)}
    >
      <div className="absolute top-0 left-0 right-0 h-3 bg-rose-400 rounded-t-md" />
      <div className="flex items-center justify-center h-full text-black text-xl font-bold">
        {day}
      </div>
      {pillStatus && (
        <div className="absolute bottom-1 right-1 text-2xl">
          {getIcon()}
        </div>
      )}
    </div>
  );
};

export default CalendarDay;