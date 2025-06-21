import React, { useMemo, memo } from 'react';
import CustomButton from './CustomButton';

// Mover fuera del componente para evitar recreación en cada render
const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

// Memoizar la función para evitar ejecuciones innecesarias
const useCurrentDate = () => {
  return useMemo(() => {
    const now = new Date();
    return `${DAYS[now.getDay()]} ${now.getDate()} de ${MONTHS[now.getMonth()]} del ${now.getFullYear()}`;
  }, []); // Solo se recalcula si el día cambia
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
  const currentDate = useCurrentDate();

  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="assets/smartphone/Home/reloj.png" 
            alt="Alarma" 
            className="w-12 h-12 mr-3"
            loading="lazy" // Optimización para imágenes
          />
          <div>
            <div className="text-sm font-semibold text-gray-800">Toma de hoy</div>
            <div className="text-xs text-gray-500">{currentDate}</div>
            <div className="mt-2 flex items-center">
              <span 
                className="text-xs font-mono px-2 py-1 rounded-lg" 
                style={{ 
                  background: 'var(--color-gradient-2)', 
                  color: 'var(--color-primary)',
                  minWidth: '60px', // Evitar cambios de layout
                  display: 'inline-block',
                  textAlign: 'center'
                }}
              >
                {time}
              </span>
              <span className="ml-2 text-sm text-gray-700">{period}</span>
            </div>
          </div>
        </div>
        <CustomButton
          size="small"
          onClick={onRegisterDose}
          className="text-xs py-1.5 px-3" // Usar clases en lugar de estilos en línea
          aria-label="Registrar toma actual"
        >
          Registrar toma
        </CustomButton>
      </div>
      <div className="text-xs text-gray-500 mt-2 text-left">
        Próxima toma en <span className="font-medium">{nextDoseIn}</span>
      </div>
    </div>
  );
};

export default memo(TodayDose);