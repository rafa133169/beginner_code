// components/ProtectionStatus.tsx

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
  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mt-4 flex items-center justify-between border-4 border-[#DF7A92]">
      <div>
        <div className="font-bold text-lg text-gray-800">Estado de protección</div>
        <div className="w-40 h-3 rounded-full mt-2 mb-1" style={{ background: 'var(--color-gradient-2)' }}>
          <div className="h-3 bg-green-500 rounded-full" style={{ width: `${protectionPercentage}%` }} />
        </div>
        <div className="text-xs text-green-600 font-medium">Estás protegida</div>
        <div className="text-xs text-gray-500 mt-1">{getCurrentDate()}</div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-600 mb-1">Píldora actual</span>
        <div className="rounded-lg px-3 py-2 text-center" style={{ background: 'var(--color-gradient-2)' }}>
          <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>{currentPill}</span>
          <span className="text-xs text-gray-700"> de {totalPills}</span>
        </div>
      </div>
    </div>
  );
};

export default ProtectionStatus;