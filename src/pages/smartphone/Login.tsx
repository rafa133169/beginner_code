import { IonApp, IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Importar nuestras utilidades
import { SecurityValidator, ValidationErrors } from '../../utils/validation';
import { NotificationManager, NotificationState } from '../../utils/notifications';
import CustomNotification from '../../components/Smartphone/CustomNotification';

// Credenciales estáticas para pruebas
const STATIC_CREDENTIALS = {
  username: 'laura@gmail.com',
  password: 'Laura12345'
};

const Login: React.FC = () => {
  // Estados principales
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [notification, setNotification] = useState<NotificationState>(
    NotificationManager.createClosedNotification()
  );
  const [isLoading, setIsLoading] = useState(false);
  
  const history = useHistory();

  // Manejar cambios en los inputs
  const handleInputChange = (field: 'username' | 'password', value: string) => {
    const sanitizedValue = field === 'password' ? value : SecurityValidator.sanitizeInput(value);
    
    setCredentials({
      ...credentials,
      [field]: sanitizedValue
    });
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (validationErrors[field]) {
      setValidationErrors({
        ...validationErrors,
        [field]: undefined
      });
    }
  };

  // Función principal de login
  const handleLogin = async () => {
    // 1. Validar formulario
    const validation = SecurityValidator.validateLoginForm(credentials);
    
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      setNotification(NotificationManager.createWarningNotification());
      return;
    }

    setIsLoading(true);

    try {
      // 2. Sanitizar datos
      const sanitizedCredentials = {
        username: SecurityValidator.sanitizeInput(credentials.username),
        password: credentials.password
      };

      // 3. Simular llamada API con delay
      console.log('Login attempt with:', sanitizedCredentials);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 4. Verificar credenciales estáticas
      if (sanitizedCredentials.username === STATIC_CREDENTIALS.username && 
          sanitizedCredentials.password === STATIC_CREDENTIALS.password) {
        
        // Login exitoso
        setNotification({
          isOpen: true,
          type: 'success',
          title: '¡Bienvenido!',
          message: 'Has iniciado sesión correctamente'
        });
        
        // Limpiar formulario
        setCredentials({ username: '', password: '' });
        setValidationErrors({});
        
        // Redirigir al home después de un momento
        setTimeout(() => {
          history.push('/home');
        }, 2000);
        
      } else {
        // Credenciales incorrectas
        setNotification({
          isOpen: true,
          type: 'error',
          title: 'Error de autenticación',
          message: 'Usuario o contraseña incorrectos'
        });
      }

    } catch (error) {
      setNotification(NotificationManager.createErrorNotification());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonApp>
      <IonPage>
        <IonContent 
          className="ion-padding" 
          style={{ background: '#FFDEED' }}
        >
          <div className="flex flex-col min-h-screen items-center justify-center px-4">
            {/* Logo de la aplicación */}
            <div className="mb-8 text-center">
              <img 
                src="../../public/logopill.png" 
                alt="Logo de la aplicación" 
                className="w-64 h-24 mx-auto object-contain"
              />
            </div>

            {/* Card de Login */}
            <div 
              className="w-full max-w-md rounded-3xl p-8 shadow-lg"
              style={{ background: '#DF7A92' }}
            >
              <h1 className="text-3xl font-bold text-white text-center mb-2">
                Iniciar sesión
              </h1>

              {/* Credenciales de prueba */}
              {/* <div className="mb-4 p-3 bg-white bg-opacity-20 rounded-lg">
                <p className="text-white text-sm text-center">
                  <strong>Usuario de prueba:</strong><br/>
                  Usuario: admin<br/>
                  Contraseña: Admin123
                </p>
              </div> */}

              {/* Input Usuario */}
              <div className="mb-4 relative">
                <div className="flex items-center border-b-2 border-white">
                  <IonIcon 
                    icon={personOutline} 
                    className="text-white text-xl"
                  />
                  <IonInput
                    className="text-white ml-2"
                    placeholder="Ingresa tu usuario"
                    value={credentials.username}
                    maxlength={20}
                    style={{ 
                      '--placeholder-color': 'rgba(255,255,255,0.7)',
                      '--highlight-color': 'transparent',
                      '--highlight-color-focused': 'transparent',
                      '--highlight-color-valid': 'transparent',
                      '--highlight-color-invalid': 'transparent'
                    }}
                    onIonChange={e => handleInputChange('username', e.detail.value || '')}
                  />
                </div>
                {validationErrors.username && (
                  <p className="text-white text-sm mt-1 opacity-90">
                    {validationErrors.username}
                  </p>
                )}
              </div>

              {/* Input Contraseña */}
              <div className="mb-6 relative">
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
                    maxlength={128}
                    style={{ 
                      '--placeholder-color': 'rgba(255,255,255,0.7)',
                      '--highlight-color': 'transparent',
                      '--highlight-color-focused': 'transparent',
                      '--highlight-color-valid': 'transparent',
                      '--highlight-color-invalid': 'transparent'
                    }}
                    onIonChange={e => handleInputChange('password', e.detail.value || '')}
                  />
                </div>
                {validationErrors.password && (
                  <p className="text-white text-sm mt-1 opacity-90">
                    {validationErrors.password}
                  </p>
                )}
              </div>

              {/* Botón Login */}
              <IonButton
                expand="block"
                className="mt-4"
                disabled={isLoading}
                style={{
                  '--background': isLoading ? '#ccc' : '#F36F9D',
                  '--border-radius': '12px',
                  '--color': 'white',
                  'margin': '0'
                }}
                onClick={handleLogin}
                
              >
                {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </IonButton>
            </div>

            {/* Link Registro */}
            <button 
              onClick={() => history.push('/register')}
              className="mt-6 text-[#DF7A92] font-medium"
              disabled={isLoading}
            >
              ¿No tienes cuenta? Regístrate Aquí
            </button>
          </div>

          {/* Componente de Notificación Personalizada */}
          <CustomNotification
            isOpen={notification.isOpen}
            type={notification.type}
            title={notification.title}
            message={notification.message}
            onClose={() => setNotification(NotificationManager.createClosedNotification())}
            duration={4000}
          />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Login;