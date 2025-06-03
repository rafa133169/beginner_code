import { IonPage, IonApp, IonContent, IonButton, IonToggle, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { personOutline, helpCircleOutline, pawOutline, logOutOutline, chevronForwardOutline } from 'ionicons/icons';
import '../../main.css'

const Settings: React.FC = () => {
    const [petActive, setPetActive] = useState(false);
    const history = useHistory(); // Hook para navegación

    const navigateToEditProfile = () => {
        history.push('/edit-profile');
    };
    const navigateToHelp = () => {
        history.push('/mobile/help');
    };
    return (
        <IonApp>
            <IonPage>
                <IonContent className="bg-white min-h-screen" style={{ padding: 0 }}>
                    {/* Header con gradiente - sin padding lateral */}
                    <div
                        className="w-full rounded-b-3xl pb-8 pt-12"
                        style={{
                            background: 'linear-gradient(180deg, #DF7A92 0%, #FFDEED 50%, #fff 100%)',
                            minHeight: '280px'
                        }}
                    >
                        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-sm">
                            Configuración
                        </h1>
                        <div className="flex flex-col items-center">
                            <div
                                className="w-28 h-28 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-white border-opacity-30"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                <span className="text-5xl text-white font-bold drop-shadow-md">L</span>
                            </div>
                            <span className="text-xl font-semibold text-white drop-shadow-sm">
                                Laura Alvarez
                            </span>
                        </div>
                    </div>

                    {/* Contenedor principal - sin márgenes laterales */}
                    <div className="w-full mt-6">

                        {/* Card de opciones principales - sin márgenes laterales */}
                        <div className="bg-white shadow-lg border-t border-b border-gray-100 mb-6">
                            {/* Editar perfil */}
                            <div className="flex items-center justify-between py-5 px-6 border-b border-gray-100" onClick={navigateToEditProfile}>
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DF7A92' }}>
                                        <IonIcon icon={personOutline} className="text-white text-lg" />
                                    </div>
                                    <span className="text-lg font-medium text-gray-800">Editar perfil</span>
                                </div>
                                <IonIcon icon={chevronForwardOutline} className="text-gray-400 text-xl" />
                            </div>

                            {/* Ayuda */}
                            <div className="flex items-center justify-between py-5 px-6 border-b border-gray-100" onClick={navigateToHelp}>
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DF7A92' }}>
                                        <IonIcon icon={helpCircleOutline} className="text-white text-lg" />
                                    </div>
                                    <span className="text-lg font-medium text-gray-800">Ayuda</span>
                                </div>
                                <IonIcon icon={chevronForwardOutline} className="text-gray-400 text-xl" />
                            </div>

                            {/* Mascota Activa */}
                            <div className="flex items-center justify-between py-5 px-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DF7A92' }}>
                                        <IonIcon icon={pawOutline} className="text-white text-lg" />
                                    </div>
                                    <span className="text-lg font-medium text-gray-800">Mascota Activa</span>
                                </div>
                                <IonToggle
                                    checked={petActive}
                                    onIonChange={e => setPetActive(e.detail.checked)}
                                    style={{
                                        '--color': '#e5e7eb',
                                        '--color-checked': '#DF7A92',
                                        '--handle-background': 'white',
                                        '--handle-background-checked': 'white',
                                        '--handle-box-shadow': '0 2px 4px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                        </div>


                        {/* Botón cerrar sesión - sin márgenes laterales */}
                        <div className="px-6">
                            <IonButton expand="block" className="logout-button">
                                <IonIcon icon={logOutOutline} className="mr-2" />
                                Cerrar sesión
                            </IonButton>
                        </div>
                    </div>

                    {/* Espaciado inferior */}
                    <div className="h-20" />
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default Settings;