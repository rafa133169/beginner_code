import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonCheckbox, IonIcon } from '@ionic/react';
import { bookOutline, logoGithub, code, desktop, library } from 'ionicons/icons';

const ProgrammingPathView: React.FC = () => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    const topics = [
        { id: 'database', name: 'Base de datos', icon: library },
        { id: 'python', name: 'Python', icon: code },
        { id: 'logic', name: 'Lógica de programación', icon: desktop },
        { id: 'github', name: 'GitHub', icon: logoGithub }
    ];

    const handleTopicToggle = (topicId: string) => {
        setSelectedTopics(prev =>
            prev.includes(topicId)
                ? prev.filter(id => id !== topicId)
                : [...prev, topicId]
        );
    };

    const history = useHistory();
    const handleSkip = () => {
        history.push('/home');
    };

    return (
        <IonPage>
            <IonContent>
                <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col">
                    {/* Header Section */}
                    <div className="text-center pt-8 pb-4 px-4">
                        {/* Logo principal */}
                        <div className="mb-4 flex justify-center">
                            <img src="/assets/beginner_code.png" alt="Beginner Code Logo" className="w-32 md:w-40 lg:w-48 h-auto" style={{ background: 'none', boxShadow: 'none', borderRadius: 0 }} />
                        </div>

                        {/* Title */}
                        <h1
                            className="text-2xl md:text-3xl mb-8 text-center"
                            style={{ fontFamily: "'Jersey 25', sans-serif" }}
                        >
                            TU CAMINO A LA PROGRAMACIÓN COMIENZA AQUÍ
                        </h1>

                        {/* Mascota con globo de diálogo */}
                        <div
                            className="relative w-full max-w-md mx-auto mt-10"
                            style={{ minHeight: '120px' }}
                        >
                            {/* Globo de diálogo */}
                            <div className="absolute left-24 top-0 max-w-xs md:max-w-sm bg-sky-200 rounded-lg shadow px-4 py-3" style={{ zIndex: 2 }}>
                                <span className="font-bold">Hola, soy Binary, <span className="font-bold">¿necesitas orientación para comenzar?</span></span>
                                <div className="absolute left-[-18px] top-8 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-16 border-r-sky-200"></div>
                            </div>
                            {/* Mascota en la esquina inferior izquierda */}
                            <img src="/assets/mascota.png" alt="Mascota" className="absolute left-0 bottom-0 w-20 h-20 md:w-24 md:h-24 object-contain" style={{ zIndex: 3 }} />
                        </div>
                    </div>

                    {/* Question Section - custom diseño */}
                    <div className="flex-1 px-4 flex flex-col items-center justify-start mt-2" style={{ fontFamily: "'Itim', cursive" }}>
                        {/* Título */}
                        <h3 className="text-center text-lg md:text-xl font-bold text-black mb-2">
                            ¿Qué temas te interesan aprender?
                        </h3>
                        {/* Línea negra */}
                        <div className="w-full max-w-xs md:max-w-md h-1 bg-black mb-6"></div>
                        {/* Lista de temas */}
                        <div className="w-full max-w-xs md:max-w-md flex flex-col divide-y divide-gray-400 mb-8 bg-transparent">
                            {topics.map((topic, idx) => (
                                <div key={topic.id} className="py-3 text-center text-black text-base md:text-lg font-semibold select-none">
                                    {topic.name}
                                </div>
                            ))}
                        </div>
                        {/* Botón Omitir por ahora */}
                        <div className="w-full max-w-xs md:max-w-md flex justify-end pb-8">
                            <button
                                onClick={handleSkip}
                                className="p-0 bg-transparent border-none shadow-none hover:opacity-90 transition-all"
                                style={{ outline: 'none' }}
                            >
                                <img src="/assets/button_omitir.png" alt="Omitir por ahora" className="w-40 md:w-48 lg:w-56 h-auto block" />
                            </button>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ProgrammingPathView;