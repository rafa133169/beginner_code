import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import MobileDashboard from '../../pages/smartphone/SmartphoneDashboard';
import Settings from '../../pages/smartphone/Settings';
import EditarPerfil from '../../pages/smartphone/EditProfile';

const MobileLayout: React.FC = () => {
  return (
    <IonApp>
      <IonRouterOutlet>
        <Route exact path="/mobile" component={MobileDashboard} />
        <Route exact path="/mobile/settings" component={Settings} />
        <Route exact path="/edit-profile" component={EditarPerfil} />
      </IonRouterOutlet>
    </IonApp>
  );
};
export default MobileLayout;