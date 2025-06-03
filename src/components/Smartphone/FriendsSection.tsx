// components/FriendsSection.tsx
import React from 'react';
import CustomButton from './CustomButton';

interface Friend {
  nombre: string;
  estado: string;
  imagen: string;
}

interface FriendsSectionProps {
  friends?: Friend[];
  onViewMore?: () => void;
  onRemind?: (friend: Friend) => void;
}

const defaultFriends: Friend[] = [
  {
    nombre: "Valeria García",
    estado: "Por tomar",
    imagen: "/../public/woman1.png"
  },
  {
    nombre: "Yesenia Torres",
    estado: "Por tomar",
    imagen: "/../public/woman2.png"
  },
  {
    nombre: "Viridiana Álvarez",
    estado: "Por tomar",
    imagen: "/../public/woman3.png"
  },
  {
    nombre: "Luna Aguilar",
    estado: "Por tomar",
    imagen: "/../public/woman4.png"
  },
];

const FriendsSection: React.FC<FriendsSectionProps> = ({
  friends = defaultFriends,
  onViewMore,
  onRemind
}) => {
  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-lg text-gray-800">Amigas</div>
        <button 
          className="text-[#DF7A92] text-sm font-semibold"
          onClick={onViewMore}
        >
          Ver más...
        </button>
      </div>
      {friends.map((amiga, idx) => (
        <div 
          key={idx} 
          className="flex items-center justify-between border-b last:border-b-0 py-2" 
          style={{ borderColor: 'var(--color-gradient-2)' }}
        >
          <div className="flex items-center">
            <img src={amiga.imagen} alt={amiga.nombre} className="w-8 h-8 rounded-full mr-2" />
            <div>
              <div className="text-sm font-medium text-gray-800">{amiga.nombre}</div>
              <div className="text-xs text-gray-500">{amiga.estado}</div>
            </div>
          </div>
          <CustomButton
            size="small"
            onClick={() => onRemind?.(amiga)}
          >
            Recordar
          </CustomButton>
        </div>
      ))}
    </div>
  );
};

export default FriendsSection;