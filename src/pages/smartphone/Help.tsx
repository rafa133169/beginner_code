import { IonApp, IonPage, IonContent, IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline, linkOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Help: React.FC = () => {
    const history = useHistory();

    return (
        <IonApp>
            <IonPage>
                <IonContent className="min-h-screen p-0 bg-white">

                    {/* Encabezado estilo Figma */}
                    <div
                        className="w-full rounded-b-3xl pb-8 pt-12"
                        style={{
                            background: 'linear-gradient(180deg, #DF7A92 0%, #FFDEED 50%, #fff 100%)',
                            minHeight: '200px'
                        }}
                    >
                        <h1 className="text-4xl font-bold text-center text-white drop-shadow-md">
                            Ayuda
                        </h1>
                    </div>

                    {/* Contenido principal */}
                    <div className="px-6 mt-8 space-y-6">
                        <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 shadow-sm text-gray-800">
                            <p>📅 <strong>Calendario emocional:</strong> Registra cómo te sientes día a día para llevar un seguimiento de tu estado emocional.</p>
                        </div>

                        <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 shadow-sm text-gray-800">
                            <p>👯‍♀️ <strong>Amigas:</strong> Conéctate con tus amigas y comparte cómo te sientes. Verás sus nombres y estados.</p>
                        </div>

                        <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 shadow-sm text-gray-800">
                            <p>🐶 <strong>Mascota activa:</strong> Una mascota virtual que te acompaña y motiva según tu estado emocional.</p>
                        </div>

                        <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 shadow-sm text-gray-800">
                            <p>⚙️ <strong>Editar perfil:</strong> Cambia tu nombre, contraseña y preferencias desde la sección de configuración.</p>
                        </div>

                        {/* Información externa de salud */}
                        <div className="bg-pink-100 border border-pink-200 rounded-xl p-4 shadow-md text-gray-800">
                            <p className="mb-2">🩺 <strong>¿Buscas más información sobre las pastillas anticonceptivos?</strong></p>
                            <a
                                href="https://imss.gob.mx/salud-en-linea/planificacion-familiar/pastillas-anticonceptivas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-pink-600 font-medium hover:underline"
                            >
                                <IonIcon icon={linkOutline} className="mr-1" />
                                Visita el sitio del IMSS
                            </a>
                        </div>

                        <div className="text-center text-gray-600 text-sm pt-4">
                            ¿Tienes más dudas? Escríbenos a <strong>soporte@miapp.com</strong>
                        </div>
                    </div>

                    {/* Espaciado inferior */}
                    <div className="h-20" />

                    {/* Botón regresar */}
                    <div className="px-6 mt-6">
                        <IonButton expand="block" fill="outline" color="medium" onClick={() => history.goBack()}>
                            <IonIcon icon={arrowBackOutline} slot="start" />
                            Volver
                        </IonButton>
                    </div>
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default Help;
