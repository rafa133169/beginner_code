import { IonApp, IonPage, IonContent } from '@ionic/react';

const Opening: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        <IonContent>
          <div
            className="w-full h-screen flex flex-col justify-center items-center"
            style={{
              background: 'linear-gradient(180deg, #DF7A92 0%, #FFD0E6 60%, #FDD3D0 100%)',
            }}
          >
            {/* Logo centrado */}
            <div className="flex flex-col items-center">
              <img
                src=".../../public/logopill.png"
                alt="PillControlBand"
                className="w-56 max-w-xs"
              />
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Opening;