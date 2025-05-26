import { IonPage, IonApp, IonContent, IonButton, IonIcon, IonInput, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonItem, IonLabel, IonDatetime, IonModal } from '@ionic/react';
import { useState, useRef } from 'react';
import { personOutline, cameraOutline, calendarOutline, saveOutline, chevronDownOutline } from 'ionicons/icons';
import '../../main.css'

const EditProfile: React.FC = () => {
    const [profileData, setProfileData] = useState({
        name: 'Laura Alvarez',
        email: 'laura.alvarez@email.com',
        birthDate: '1995-03-15',
        pillType: '21',
        startTime: '08:00',
        phone: '+52 555 123 4567'
    });

    const [isDateOpen, setIsDateOpen] = useState(false);
    const modal = useRef<HTMLIonModalElement>(null);

    const handleInputChange = (field: string, value: string) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        // Aquí implementarías la lógica para guardar los datos
        console.log('Datos guardados:', profileData);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <IonApp>
            <IonPage>
                <IonHeader>
                    <IonToolbar style={{ '--background': '#DF7A92' }}>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/settings" style={{ '--color': 'white' }} />
                        </IonButtons>
                        <IonTitle style={{ color: 'white', fontWeight: 'bold' }}>
                            Editar perfil
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="bg-white" style={{ padding: 0 }}>
                    {/* Header con foto de perfil */}
                    <div
                        className="w-full pb-8 pt-8"
                        style={{
                            background: 'linear-gradient(180deg, #DF7A92 0%, #FFDEED 50%, #fff 100%)',
                            minHeight: '200px'
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div
                                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white border-opacity-30"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                                >
                                    <span className="text-4xl text-white font-bold drop-shadow-md">L</span>
                                </div>
                                <button
                                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                                    style={{ backgroundColor: '#DF7A92' }}
                                >
                                    <IonIcon icon={cameraOutline} className="text-white text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="px-6 mt-6">
                        {/* Información Personal */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-100" style={{ backgroundColor: '#FFDEED' }}>
                                <h3 className="text-lg font-semibold" style={{ color: '#DF7A92' }}>
                                    Información Personal
                                </h3>
                            </div>
                            
                            <div className="p-4 space-y-4">
                                {/* Nombre completo */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre completo
                                    </label>
                                    <IonInput
                                        value={profileData.name}
                                        onIonInput={(e) => handleInputChange('name', e.detail.value!)}
                                        fill="outline"
                                        style={{
                                            '--border-color': '#e5e7eb',
                                            '--border-radius': '12px',
                                            '--padding-start': '16px',
                                            '--padding-end': '16px'
                                        }}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Correo electrónico
                                    </label>
                                    <IonInput
                                        value={profileData.email}
                                        onIonInput={(e) => handleInputChange('email', e.detail.value!)}
                                        type="email"
                                        fill="outline"
                                        style={{
                                            '--border-color': '#e5e7eb',
                                            '--border-radius': '12px',
                                            '--padding-start': '16px',
                                            '--padding-end': '16px'
                                        }}
                                    />
                                </div>

                                {/* Teléfono */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono
                                    </label>
                                    <IonInput
                                        value={profileData.phone}
                                        onIonInput={(e) => handleInputChange('phone', e.detail.value!)}
                                        type="tel"
                                        fill="outline"
                                        style={{
                                            '--border-color': '#e5e7eb',
                                            '--border-radius': '12px',
                                            '--padding-start': '16px',
                                            '--padding-end': '16px'
                                        }}
                                    />
                                </div>

                                {/* Fecha de nacimiento */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Fecha de nacimiento
                                    </label>
                                    <button
                                        onClick={() => setIsDateOpen(true)}
                                        className="w-full p-3 border border-gray-300 rounded-xl text-left flex items-center justify-between bg-white"
                                    >
                                        <span className="text-gray-900">
                                            {formatDate(profileData.birthDate)}
                                        </span>
                                        <IonIcon icon={calendarOutline} className="text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Configuración de Tratamiento */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-100" style={{ backgroundColor: '#FFDEED' }}>
                                <h3 className="text-lg font-semibold" style={{ color: '#DF7A92' }}>
                                    Configuración de Tratamiento
                                </h3>
                            </div>
                            
                            <div className="p-4 space-y-4">
                                {/* Tipo de pastilla */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tipo de pastilla
                                    </label>
                                    <IonSelect
                                        value={profileData.pillType}
                                        onSelectionChange={(e) => handleInputChange('pillType', e.detail.value)}
                                        fill="outline"
                                        interface="popover"
                                        style={{
                                            '--border-color': '#e5e7eb',
                                            '--border-radius': '12px',
                                            '--padding-start': '16px',
                                            '--padding-end': '16px'
                                        }}
                                    >
                                        <IonSelectOption value="21">21 días</IonSelectOption>
                                        <IonSelectOption value="28">28 días</IonSelectOption>
                                    </IonSelect>
                                </div>

                                {/* Hora de recordatorio */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Hora de recordatorio
                                    </label>
                                    <IonInput
                                        value={profileData.startTime}
                                        onIonInput={(e) => handleInputChange('startTime', e.detail.value!)}
                                        type="time"
                                        fill="outline"
                                        style={{
                                            '--border-color': '#e5e7eb',
                                            '--border-radius': '12px',
                                            '--padding-start': '16px',
                                            '--padding-end': '16px'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Botón guardar */}
                        <IonButton
                            expand="block"
                            onClick={handleSave}
                            style={{
                                '--background': '#DF7A92',
                                '--background-hover': '#c86b83',
                                '--border-radius': '12px',
                                '--padding-top': '16px',
                                '--padding-bottom': '16px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                marginBottom: '24px'
                            }}
                        >
                            <IonIcon icon={saveOutline} slot="start" />
                            Guardar cambios
                        </IonButton>
                    </div>

                    {/* Modal para fecha de nacimiento */}
                    <IonModal ref={modal} isOpen={isDateOpen} onDidDismiss={() => setIsDateOpen(false)}>
                        <IonHeader>
                            <IonToolbar style={{ '--background': '#DF7A92' }}>
                                <IonTitle style={{ color: 'white' }}>Fecha de nacimiento</IonTitle>
                                <IonButtons slot="end">
                                    <IonButton onClick={() => setIsDateOpen(false)} style={{ '--color': 'white' }}>
                                        Cerrar
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <div className="p-4">
                                <IonDatetime
                                    value={profileData.birthDate}
                                    onIonChange={(e) => {
                                        handleInputChange('birthDate', e.detail.value as string);
                                        setIsDateOpen(false);
                                    }}
                                    presentation="date"
                                    max="2010-12-31"
                                    min="1950-01-01"
                                    style={{
                                        '--background': 'white',
                                        '--color': '#333'
                                    }}
                                />
                            </div>
                        </IonContent>
                    </IonModal>

                    {/* Espaciado inferior */}
                    <div className="h-20" />
                </IonContent>
            </IonPage>
        </IonApp>
    );
};

export default EditProfile;