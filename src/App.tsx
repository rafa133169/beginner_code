import { IonApp, setupIonicReact, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';
import BeginnerCodeWelcome from './pages/BeginnerCodeWelcome';
import ProgrammingPathView from './pages/ProgrammingPathView';
import HomeView from './pages/HomeView';
import ContentView from './pages/ContentView';
import DocumentView from './pages/DocumentView';
import { Route, Redirect } from 'react-router-dom';


setupIonicReact();

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={BeginnerCodeWelcome} />
          <Route path="/orientacion" component={ProgrammingPathView} />
          <Route path="/home" component={HomeView} />
          <Route path="/content/:tema" component={ContentView} />
          <Route path="/document/:doc" component={DocumentView} />
          <Redirect to="/" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
