import React, { useMemo } from 'react';

// Mover constantes fuera del componente para evitar recreación
const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

// Memoizar la función de fecha para evitar recreación en cada render
const useCurrentDate = () => {
  return useMemo(() => {
    const now = new Date();
    const dayName = DAYS[now.getDay()];
    const day = now.getDate();
    const month = MONTHS[now.getMonth()];
    const year = now.getFullYear();
    return `${dayName} ${day} de ${month} del ${year}`;
  }, []); // El array vacío asegura que solo se calcule una vez
};

interface ProtectionStatusProps {
  currentPill?: number;
  totalPills?: number;
  protectionPercentage?: number;
}

const ProtectionStatus: React.FC<ProtectionStatusProps> = ({
  currentPill = 20,
  totalPills = 28,
  protectionPercentage = 80
}) => {
  const currentDate = useCurrentDate();
  const protectionWidth = useMemo(() => `${Math.min(100, Math.max(0, protectionPercentage))}%`, [protectionPercentage]);

  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mt-4 flex items-center justify-between border-4 border-[#DF7A92]">
      <div className="flex-1 min-w-0">
        <h2 className="font-bold text-lg text-gray-800">Estado de protección</h2>
        <div className="w-full max-w-40 h-3 rounded-full mt-2 mb-1 bg-gray-200 overflow-hidden">
          <div 
            className="h-3 bg-green-500 rounded-full transition-all duration-300 ease-out" 
            style={{ width: protectionWidth }}
            role="progressbar"
            aria-valuenow={protectionPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div className="text-xs text-green-600 font-medium">Estás protegida</div>
        <time dateTime={new Date().toISOString()} className="text-xs text-gray-500 mt-1 block">
          {currentDate}
        </time>
      </div>
      <div className="flex flex-col items-center ml-4">
        <span className="text-xs text-gray-600 mb-1">Píldora actual</span>
        <div className="rounded-lg px-3 py-2 text-center bg-gradient-to-r from-pink-200 to-pink-300">
          <span className="text-2xl font-bold text-[#DF7A92]">{currentPill}</span>
          <span className="text-xs text-gray-700"> de {totalPills}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProtectionStatus);