import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { useScreenSize } from '../hooks/useScreenSize';
import  SmartTvDashboard  from './SmartTvDashboard';
import  MobileDashboard  from './SmartphoneDashboard';
import { useEffect, useState } from 'react';
import SmartwatchNotification from './SmartwatchNotification';

const DeviceRouter = () => {
  const { deviceType } = useScreenSize();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Pequeño delay para asegurar que la detección sea precisa
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            {deviceType === 'smartwatch' && <SmartwatchNotification />}
            {deviceType === 'smarttv' && <SmartTvDashboard />}
            {deviceType === 'mobile' && <MobileDashboard />}
          </Route>
          <Redirect to="/" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default DeviceRouter;