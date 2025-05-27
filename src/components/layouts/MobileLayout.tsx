import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import MobileDashboard from '../../pages/smartphone/SmartphoneDashboard';
import Settings from '../../pages/smartphone/Settings';
import EditarPerfil from '../../pages/smartphone/EditProfile';
import Calendar from '../../pages/smartphone/Calendar';
import Home from '../../pages/smartphone/Home'; 
import Opening from '../../pages/smartphone/Opening';
import Login from '../../pages/smartphone/Login'; // Importa el componente de Login si es necesario
import Register from '../../pages/smartphone/Register'; // Importa el componente de Register si es necesario

const MobileLayout: React.FC = () => {
  return (
    <IonApp>
      <IonRouterOutlet>
        <Route exact path="/mobile" component={MobileDashboard} />
        <Route exact path="/mobile/settings" component={Settings} />
        <Route exact path="/edit-profile" component={EditarPerfil} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path='/home' component={Home}/>
        <Route exact path='/mobile/opening' component={Opening}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </IonRouterOutlet>
    </IonApp>
  );
};
export default MobileLayout;