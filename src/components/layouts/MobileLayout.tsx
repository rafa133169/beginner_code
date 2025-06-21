import React, { useMemo } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import Settings from '../../pages/smartphone/Settings';
import EditarPerfil from '../../pages/smartphone/EditProfile';
import Calendar from '../../pages/smartphone/CalendarPages';
import Home from '../../pages/smartphone/Home'; 
import Opening from '../../pages/smartphone/Opening';
import Login from '../../pages/smartphone/Login';
import Register from '../../pages/smartphone/Register';
import BottomNav from '../Smartphone/BottomNav';
import Help from '../../pages/smartphone/Help';

// Mover fuera del componente para evitar recreación
const NO_BOTTOM_NAV_ROUTES = ['/login', '/register', '/edit-profile'];

const MobileLayout: React.FC = () => {
  const location = useLocation();
  
  // Memoizar el cálculo para evitar re-renders innecesarios
  const showBottomNav = useMemo(() => {
    return !NO_BOTTOM_NAV_ROUTES.some(route => 
      location.pathname.startsWith(route))
  }, [location.pathname]);

  // Memoizar las rutas para optimización
  const routes = useMemo(() => (
    <>
      <Route exact path="/mobile" render={() => <Home key="home" />} />
      <Route exact path="/mobile/settings" render={() => <Settings key="settings" />} />
      <Route exact path="/edit-profile" render={() => <EditarPerfil key="edit-profile" />} />
      <Route exact path="/calendar" render={() => <Calendar key="calendar" />} />
      <Route exact path="/mobile/opening" render={() => <Opening key="opening" />} />
      <Route exact path="/login" render={() => <Login key="login" />} />
      <Route exact path="/register" render={() => <Register key="register" />} />
      <Route path="/mobile/help" render={() => <Help key="help" />} />
      <Redirect from="/" to="/mobile" exact />
    </>
  ), []);

  return (
    <IonApp>
      <div className="flex flex-col h-screen bg-white">
        {/* Espacio superior para notch/status bar - optimizado */}
        <div 
          className="h-[env(safe-area-inset-top)] bg-transparent pointer-events-none" 
          aria-hidden="true"
        />

        {/* Contenido principal con optimización de scroll */}
        <div 
          className={`flex-1 overflow-y-auto pb-16 will-change-transform`}
          style={{ contain: 'strict' }} // Mejora el rendimiento de renderizado
        >
          <IonRouterOutlet>
            {routes}
          </IonRouterOutlet>
        </div>

        {/* Bottom Navigation con optimización de renderizado */}
        {showBottomNav && (
          <div 
            className="fixed bottom-0 w-full z-50 border-t shadow-inner bg-white"
            style={{ 
              willChange: 'transform',
              bottom: 'env(safe-area-inset-bottom)' // Soporte para iPhone
            }}
          >
            <BottomNav />
          </div>
        )}
      </div>
    </IonApp>
  );
};

export default React.memo(MobileLayout);