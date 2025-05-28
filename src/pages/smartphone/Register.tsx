import { IonApp, IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const history = useHistory();

  const handleRegister = () => {
    // Aquí irá la lógica de registro
    console.log('Register with:', userData);
  };

  return (
    <IonApp>
      <IonPage>
        <IonContent 
          className="ion-padding" 
          style={{ background: '#FFDEED' }}
        >
          <div className="flex flex-col min-h-screen items-center justify-center px-4">
            {/* Card de Registro */}
            <div 
              className="w-full max-w-md rounded-3xl p-8 shadow-lg"
              style={{ background: '#DF7A92' }}
            >
              <h1 className="text-3xl font-bold text-white text-center mb-6">
                Crear cuenta
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
                    placeholder="Nombre de usuario"
                    value={userData.username}
                    style={{ '--placeholder-color': 'rgba(255,255,255,0.7)' }}
                    onIonChange={e => setUserData({
                      ...userData,
                      username: e.detail.value || ''
                    })}
                  />
                </div>
              </div>

              {/* Input Email */}
              <div className="mb-6 relative">
                <div className="flex items-center border-b-2 border-white">
                  <IonIcon 
                    icon={mailOutline} 
                    className="text-white text-xl"
                  />
                  <IonInput
                    type="email"
                    className="text-white ml-2"
                    placeholder="Correo electrónico"
                    value={userData.email}
                    style={{ '--placeholder-color': 'rgba(255,255,255,0.7)' }}
                    onIonChange={e => setUserData({
                      ...userData,
                      email: e.detail.value || ''
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
                    placeholder="Contraseña"
                    value={userData.password}
                    style={{ '--placeholder-color': 'rgba(255,255,255,0.7)' }}
                    onIonChange={e => setUserData({
                      ...userData,
                      password: e.detail.value || ''
                    })}
                  />
                </div>
              </div>

              {/* Botón Registro */}
              <IonButton
                expand="block"
                className="mt-4"
                style={{
                  '--background': '#F36F9D',
                  '--border-radius': '12px',
                  '--color': 'white',
                  'margin': '0'
                }}
                onClick={handleRegister}
              >
                Registrarse
              </IonButton>
            </div>

            {/* Link Login */}
            <button 
              onClick={() => history.push('/login')}
              className="mt-6 text-[#DF7A92] font-medium"
            >
              ¿Ya tienes cuenta? Inicia sesión aquí
            </button>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Register;