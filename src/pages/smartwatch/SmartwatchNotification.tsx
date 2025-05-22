import { IonApp, IonContent, IonPage } from '@ionic/react';
import './fonts.css';

const SmartwatchNotification = () => {
  const nameUser = "Laura";
  const nextDoseTime = "21:00";

  return (
    <IonApp>
      <IonPage>
        <IonContent className="ion-padding bg-white">
          <div className="flex flex-col items-center justify-center min-h-screen w-full p-2">
            {/* Notification Card */}
            <div className="bg-white rounded-3xl w-full max-w-[180px] min-w-[140px] shadow-lg border border-gray-100 overflow-hidden">
              
              {/* Gradient Header */}
              <div 
                className="h-6 w-full"
                style={{
                  background: 'linear-gradient(to bottom, #FF9CF0, white)'
                }}
              />
              
              {/* Content Area */}
              <div className="p-3">
                {/* User Greeting */}
                <div className="mb-2 flex flex-col items-center">
                  <p className="text-sm font-semibold text-gray-800 mb-1 font-nunito">
                    Hola, {nameUser}
                  </p>
                  <div className="w-12 h-12">
                    <img 
                      src="/assets/images/MascotaFeliz.gif" 
                      alt="Mascota" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Next Dose */}
                <div className="mb-3">
                  <p className="text-xs text-center font-nunito font-extrabold text-gray-900">
                    Siguiente toma
                  </p>
                </div>
                
                {/* Time Display */}
                <div className="flex justify-center mb-4">
                  <p className="text-xl font-nunito font-normal text-gray-900">
                    {nextDoseTime} hrs
                  </p>
                </div>
                
                {/* Action Button */}
                <button
                  className="
                    w-full max-w-[113px] h-8
                    mx-auto mb-2
                    rounded-full
                    bg-gradient-to-r from-[#FF52EE] to-[#FF9CF0]
                    text-white
                    font-nunito font-bold
                    text-xs
                    shadow-md
                    hover:opacity-90
                    transition-opacity
                    flex items-center justify-center
                  "
                >
                  Registrar toma
                </button>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default SmartwatchNotification;