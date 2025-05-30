import { IonApp, IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Importar nuestras utilidades
import { SecurityValidator, UserData, ValidationErrors } from '../../utils/validation';
import { NotificationManager, NotificationState } from '../../utils/notifications';
import CustomNotification from '../../components/Smartphone/CustomNotification';

const Register: React.FC = () => {
  // Estados principales
  const [userData, setUserData] = useState<UserData>({
    username: '',
    email: '',
    password: ''
  });
  
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [notification, setNotification] = useState<NotificationState>(
    NotificationManager.createClosedNotification()
  );
  const [isLoading, setIsLoading] = useState(false);
  
  const history = useHistory();

  // Manejar cambios en los inputs
  const handleInputChange = (field: keyof UserData, value: string) => {
    const sanitizedValue = field === 'password' ? value : SecurityValidator.sanitizeInput(value);
    
    setUserData({
      ...userData,
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

  // Función principal de registro
  const handleRegister = async () => {
    // 1. Validar formulario
    const validation = SecurityValidator.validateRegisterForm(userData);
    
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      setNotification(NotificationManager.createWarningNotification());
      return;
    }

    setIsLoading(true);

    try {
      // 2. Sanitizar datos
      const sanitizedData = SecurityValidator.sanitizeRegisterData(userData);

      // 3. Simular llamada API (reemplaza con tu lógica real)
      console.log('Register with:', sanitizedData);
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 4. Manejar respuesta (cambiar por tu lógica real)
      const success = true; // Aquí iría tu lógica de API real

      if (success) {
        // Éxito
        setNotification(NotificationManager.createSuccessNotification());
        
        // Limpiar formulario
        setUserData({ username: '', email: '', password: '' });
        setValidationErrors({});
        
        // Redirigir después de un momento
        setTimeout(() => {
          history.push('/login');
        }, 2500);
      } else {
        throw new Error('Error en el registro');
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
          style={{ 
            background: 'linear-gradient(180deg, #DF7A92 0%, #FFD0E6 60%, #FDD3D0 100%)',
          }}
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

            {/* Card de Registro */}
            <div 
              className="w-full max-w-md rounded-3xl p-8 shadow-lg"
              style={{ background: '#DF7A92' }}
            >
              <h1 className="text-3xl font-bold text-white text-center mb-6">
                Crear cuenta
              </h1>

              {/* Input Usuario */}
              <div className="mb-4 relative">
                <div className="flex items-center border-b-2 border-white">
                  <IonIcon 
                    icon={personOutline} 
                    className="text-white text-xl"
                  />
                  <IonInput
                    className="text-white ml-2"
                    placeholder="Nombre de usuario"
                    value={userData.username}
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

              {/* Input Email */}
              <div className="mb-4 relative">
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
                    maxlength={100}
                    style={{ 
                      '--placeholder-color': 'rgba(255,255,255,0.7)',
                      '--highlight-color': 'transparent',
                      '--highlight-color-focused': 'transparent',
                      '--highlight-color-valid': 'transparent',
                      '--highlight-color-invalid': 'transparent'
                    }}
                    onIonChange={e => handleInputChange('email', e.detail.value || '')}
                  />
                </div>
                {validationErrors.email && (
                  <p className="text-white text-sm mt-1 opacity-90">
                    {validationErrors.email}
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
                    placeholder="Contraseña"
                    value={userData.password}
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

              {/* Botón Registro */}
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
                onClick={handleRegister}
              >
                {isLoading ? 'Creando cuenta...' : 'Registrarse'}
              </IonButton>
            </div>

            {/* Link Login */}
            <button 
              onClick={() => history.push('/login')}
              className="mt-6 text-[#DF7A92] font-medium"
              disabled={isLoading}
            >
              ¿Ya tienes cuenta? Inicia sesión aquí
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

export default Register;