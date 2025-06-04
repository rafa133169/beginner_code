import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import Settings from '../../pages/smartphone/Settings';
import EditarPerfil from '../../pages/smartphone/EditProfile';
import Calendar from '../../pages/smartphone/Calendar';
import Home from '../../pages/smartphone/Home'; 
import Opening from '../../pages/smartphone/Opening';
import Login from '../../pages/smartphone/Login';
import Register from '../../pages/smartphone/Register';
import BottomNav from '../Smartphone/BottomNav';
import Help from '../../pages/smartphone/Help';

const noBottomNavRoutes = ['/login', '/register', '/edit-profile'];

const MobileLayout: React.FC = () => {
  const location = useLocation();
  const showBottomNav = !noBottomNavRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <IonApp>
  <div className="flex flex-col h-screen bg-white">
    {/* Espacio superior para notch / status bar */}
    <div className="h-[env(safe-area-inset-top)] bg-transparent" />

    {/* Contenido principal ajustando espacio para BottomNav */}
    <div className={`flex-1 overflow-y-auto pb-16`}> 
      {/* 👆 pb-16 deja espacio para BottomNav (ajústalo según su altura real) */}
      <IonRouterOutlet>
        <Route exact path="/mobile" render={() => <Home key="home" />} />
        <Route exact path="/mobile/settings" render={() => <Settings key="settings" />} />
        <Route exact path="/edit-profile" render={() => <EditarPerfil key="edit-profile" />} />
        <Route exact path="/calendar" render={() => <Calendar key="calendar" />} />
        <Route exact path="/mobile/opening" render={() => <Opening key="opening" />} />
        <Route exact path="/login" render={() => <Login key="login" />} />
        <Route exact path="/register" render={() => <Register key="register" />} />
        <Route path="/mobile/help" render={() => <Help key="help" />} />
        <Redirect from="/" to="/mobile" exact />
      </IonRouterOutlet>
    </div>

    {/* Bottom Navigation */}
    {showBottomNav && (
      <div className="fixed bottom-0 w-full z-50 border-t shadow-inner bg-white">
        <BottomNav />
      </div>
    )}
  </div>
</IonApp>

  );
};

export default MobileLayout;
