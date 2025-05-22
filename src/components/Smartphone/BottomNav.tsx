import { useState } from 'react';
import { IonIcon } from '@ionic/react';

const BottomNav = () => {
  const [active, setActive] = useState('home');

  const navItems = [
    {
      label: 'Inicio',
      key: 'home',
      icon: 'assets/smartphone/BottomNav/HomeInactivate.svg',
      activeSvg: 'assets/smartphone/BottomNav/HomeActivate2.svg',
    },
    {
      label: 'Info',
      key: 'info',
      icon: 'assets/smartphone/BottomNav/clockInactivate.svg',
      activeSvg: 'assets/smartphone/BottomNav/clockActivate2.svg',
    },
    {
      label: 'Perfil',
      key: 'profile',
      icon: 'assets/smartphone/BottomNav/UserInactivate.svg',
      activeSvg: 'assets/smartphone/BottomNav/UserActivate2.svg',
    },

  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 shadow-md z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className="flex flex-col items-center text-xs transition-colors duration-200"
          >
            {active === item.key ? (
              <img src={item.activeSvg} alt={item.label} className="w-15 h-15 mb-1" />
            ) : (
              <IonIcon icon={item.icon} className="w-7 h-7 mb-1" />
            )}
           
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
