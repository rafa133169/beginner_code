import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route} from 'react-router-dom';
import SmartwatchNotification from '../../pages/SmartwatchNotification';

const SmartwatchLayout: React.FC = () => {
  return (
    <IonApp>
      <IonRouterOutlet>
        <Route exact path="/smartwatch" component={SmartwatchNotification} />
      </IonRouterOutlet>
    </IonApp>
  );
};

export default SmartwatchLayout;