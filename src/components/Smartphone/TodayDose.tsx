// components/TodayDose.tsx
import React from 'react';
import CustomButton from './CustomButton';

const getCurrentDate = () => {
  const now = new Date();
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return `${dayName} ${day} de ${month} del ${year}`;
};

interface TodayDoseProps {
  time?: string;
  period?: 'AM' | 'PM';
  nextDoseIn?: string;
  onRegisterDose?: () => void;
}

const TodayDose: React.FC<TodayDoseProps> = ({
  time = '08 : 30',
  period = 'PM',
  nextDoseIn = '02:00 hrs',
  onRegisterDose
}) => {
  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="assets/smartphone/Home/reloj.png" alt="Alarma" className="w-12 h-12 mr-3" />
          <div>
            <div className="text-sm font-semibold text-gray-800">Toma de hoy</div>
            <div className="text-xs text-gray-500">{getCurrentDate()}</div>
            <div className="mt-2 flex items-center">
              <span className="text-xs font-mono px-2 py-1 rounded-lg" style={{ background: 'var(--color-gradient-2)', color: 'var(--color-primary)' }}>
                {time}
              </span>
              <span className="ml-2 text-sm text-gray-700">{period}</span>
            </div>
          </div>
        </div>
        <CustomButton
          size="small"
          onClick={onRegisterDose}
          style={{
            fontSize: '12px',
            padding: '6px 12px',
          }}
        >
          Registrar toma
        </CustomButton>
      </div>
      <div className="text-xs text-gray-500 mt-2 text-left">Próxima toma en {nextDoseIn}</div>
    </div>
  );
};

export default TodayDose;