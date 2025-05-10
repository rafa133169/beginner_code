import { IonApp, IonContent } from '@ionic/react';
import './fonts.css'

const SmartwatchNotification = () => {
  const nameUser = "Laura";
  const nextDoseTime = "21:00";

  return (
    <IonApp>
      <IonContent className="bg-white h-full w-full">
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-2">
          {/* Notification Card - responsive to watch sizes */}
          <div className="bg-white rounded-3xl w-full max-w-[180px] min-w-[140px] shadow-lg border border-gray-100">
            
            <div 
              className="h-[10%] min-h-[30px] w-full"
              style={{
                background: 'linear-gradient(to bottom,rgb(255, 156, 240), white)'
              }}
            ></div>
            
            <div className="p-3 sm:p-4">
              <div className="mb-2 sm:mb-3 flex flex-col items-center">
                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1 font-nunito">
                  Hola, {nameUser}
                </p>
                <div className="w-12 h-12 text-pink-500">
  <img 
    src="../../public/assets/images/MascotaFeliz.gif" 
    alt="Animación" 
    className="w-full h-full object-contain"
  />
</div>
              </div>
              
              {/* Next dose reminder */}
              <div className="mb-3 sm:mb-4">
                <p className="text-[14px] sm:text-sm text-gray-900 text-center font-nunito font-800">
                  Siguiente toma
                </p>
                </div>
              
              {/* Time display - responsive font size */}
              <div className="flex justify-center mb-4 sm:mb-6">
               <p className="text-[15px] sm:text-2xl text-gray-900 font-nunito font-normal">
                  {nextDoseTime} hrs
                </p>
              </div>
              
              {/* Pink action button with rounded corners */}
              <button
  className="
    w-[85%]
    max-w-[113px]
    h-[30px]
    mx-auto
    my-3
    rounded-full
    text-white
    font-bold
    shadow-md
    hover:opacity-90
    transition-opacity
    flex
    items-center
    justify-center
    text-[10px]
    sm:text-xs
    "
  style={{
    background: 'linear-gradient(90deg, #FF52EE 56.6%, #FF52EE 100%)'
  }}
>
  Registrar toma
</button>

            </div>
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default SmartwatchNotification;