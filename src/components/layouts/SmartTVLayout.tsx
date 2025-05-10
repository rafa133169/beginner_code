import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import SmartTvDashboard from '../../pages/SmartTvDashboard';

const SmartTVLayout: React.FC = () => {
  return (
    <IonApp>
      <IonRouterOutlet>
        <Route exact path="/smarttv" component={SmartTvDashboard} />

      </IonRouterOutlet>
    </IonApp>
  );
};

export default SmartTVLayout;