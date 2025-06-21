import React, { useCallback, memo } from 'react';
import CustomButton from './CustomButton';

interface Friend {
  nombre: string;
  estado: string;
  imagen: string;
  id?: string; // Añadir ID único para mejor key
}

interface FriendsSectionProps {
  friends?: Friend[];
  onViewMore?: () => void;
  onRemind?: (friend: Friend) => void;
}

// Mover fuera del componente para evitar recreación
const defaultFriends: Friend[] = [
  {
    nombre: "Valeria García",
    estado: "Por tomar",
    imagen: "assets/smartphone/Home/woman1.png",
    id: "friend-1"
  },
  {
    nombre: "Yesenia Torres",
    estado: "Por tomar",
    imagen: "assets/smartphone/Home/woman2.png",
    id: "friend-2"
  },
  {
    nombre: "Viridiana Álvarez",
    estado: "Por tomar",
    imagen: "assets/smartphone/Home/woman3.png",
    id: "friend-3"
  },
  {
    nombre: "Luna Aguilar",
    estado: "Por tomar",
    imagen: "assets/smartphone/Home/woman4.png",
    id: "friend-4"
  },
];

const FriendsSection: React.FC<FriendsSectionProps> = ({
  friends = defaultFriends,
  onViewMore,
  onRemind
}) => {
  // Memoizar handlers
  const handleRemind = useCallback((friend: Friend) => {
    onRemind?.(friend);
  }, [onRemind]);

  const handleViewMore = useCallback(() => {
    onViewMore?.();
  }, [onViewMore]);

  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 mx-4 mb-4 border-4 border-[#DF7A92]">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-lg text-gray-800">Amigas</div>
        <button
          className="text-[#DF7A92] text-sm font-semibold hover:opacity-80 transition-opacity"
          onClick={handleViewMore}
          aria-label="Ver más amigas"
        >
          Ver más...
        </button>
      </div>
      <div className="max-h-[300px] overflow-y-auto">
        {friends.map((amiga) => (
          <div
            key={amiga.id || amiga.nombre} // Usar ID único o nombre como fallback
            className="flex items-center justify-between border-b last:border-b-0 py-2"
            style={{ borderColor: 'var(--color-gradient-2)' }}
          >
            <div className="flex items-center min-w-0">
              <img
                src={amiga.imagen}
                alt={`Foto de ${amiga.nombre}`}
                className="w-8 h-8 rounded-full mr-2 flex-shrink-0 object-cover"
                loading="lazy" // Lazy loading para imágenes
              />
              <div className="min-w-0">
                <div className="text-sm font-medium text-gray-800 truncate">{amiga.nombre}</div>
                <div className="text-xs text-gray-500 truncate">{amiga.estado}</div>
              </div>
            </div>
            <CustomButton
              size="small"
              onClick={() => handleRemind(amiga)}
              className="flex-shrink-0"
              aria-label={`Recordar a ${amiga.nombre}`}
            >
              Recordar
            </CustomButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FriendsSection);