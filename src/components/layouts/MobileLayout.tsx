import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import MobileDashboard from '../../pages/smartphone/SmartphoneDashboard';


const MobileLayout: React.FC = () => {
  return (
    <IonApp>
      <IonRouterOutlet>
        <Route exact path="/mobile" component={MobileDashboard} />


      </IonRouterOutlet>
    </IonApp>
  );
};
export default MobileLayout;