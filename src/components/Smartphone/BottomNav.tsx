import { IonIcon } from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const history = useHistory();

  const navItems = [
    {
      label: 'Inicio',
      key: 'home',
      path: '/mobile',
      icon: 'assets/smartphone/BottomNav/HomeInactivate.svg',
      activeSvg: 'assets/smartphone/BottomNav/HomeActivate2.svg',
      exact: true
    },
    {
      label: 'Info',
      key: 'info',
      path: '/calendar',
      icon: 'assets/smartphone/BottomNav/clockInactivate.svg',
      activeSvg: 'assets/smartphone/BottomNav/clockActivate2.svg',
      exact: false
    },
    {
      label: 'Perfil',
      key: 'profile',
      path: '/mobile/settings',
      icon: 'assets/smartphone/BottomNav/UserInactivate.svg',
      activeSvg: 'assets/smartphone/BottomNav/UserActivate2.svg',
      exact: false
    },
  ];

  const isActive = (item: typeof navItems[0]) => {
    return item.exact 
      ? location.pathname === item.path
      : location.pathname.startsWith(item.path);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 shadow-md z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={`nav-${item.key}`}
            onClick={() => history.push(item.path)}
            className={`flex flex-col items-center justify-center w-full h-full ${
              isActive(item) ? 'text-primary' : 'text-gray-500'
            }`}
            aria-label={item.label}
          >
            {isActive(item) ? (
              <img src={item.activeSvg} alt={item.label} className="w-6 h-6 mb-1" />
            ) : (
              <IonIcon icon={item.icon} className="w-6 h-6 mb-1" />
            )}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;