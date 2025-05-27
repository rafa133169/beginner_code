import { IonApp, IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const history = useHistory();

  const handleLogin = () => {
    // Aquí irá la lógica de login
    console.log('Login with:', credentials);
  };

  return (
    <IonApp>
      <IonPage>
        <IonContent 
          className="ion-padding" 
          style={{ background: '#FFDEED' }}
        >
          <div className="flex flex-col min-h-screen items-center justify-center px-4">
            {/* Card de Login */}
            <div 
              className="w-full max-w-md rounded-3xl p-8 shadow-lg"
              style={{ background: '#DF7A92' }}
            >
              <h1 className="text-3xl font-bold text-white text-center mb-2">
                Iniciar sesión
              </h1>

              {/* Input Usuario */}
              <div className="mb-6 relative">
                <div className="flex items-center border-b-2 border-white">
                  <IonIcon 
                    icon={personOutline} 
                    className="text-white text-xl"
                  />
                  <IonInput
                    className="text-white ml-2"
                    placeholder="Ingresa tu usuario"
                    value={credentials.username}
                    style={{ '--placeholder-color': 'rgba(255,255,255,0.7)' }}
                    onIonChange={e => setCredentials({
                      ...credentials,
                      username: e.detail.value || ''
                    })}
                  />
                </div>
              </div>

              {/* Input Contraseña */}
              <div className="mb-8 relative">
                <div className="flex items-center border-b-2 border-white">
                  <IonIcon 
                    icon={lockClosedOutline} 
                    className="text-white text-xl"
                  />
                  <IonInput
                    type="password"
                    className="text-white ml-2"
                    placeholder="Ingresa tu contraseña"
                    value={credentials.password}
                    style={{ '--placeholder-color': 'rgba(255,255,255,0.7)' }}
                    onIonChange={e => setCredentials({
                      ...credentials,
                      password: e.detail.value || ''
                    })}
                  />
                </div>
              </div>

              {/* Botón Login */}
              <IonButton
                expand="block"
                className="mt-4"
                style={{
                  '--background': '#F36F9D',
                  '--border-radius': '12px',
                  '--color': 'white',
                  'margin': '0'
                }}
                onClick={handleLogin}
              >
                Iniciar sesión
              </IonButton>
            </div>

            {/* Link Registro */}
            <button 
              onClick={() => history.push('/register')}
              className="mt-6 text-[#DF7A92] font-medium"
            >
              ¿No tienes cuenta? Regístrate Aquí
            </button>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Login;