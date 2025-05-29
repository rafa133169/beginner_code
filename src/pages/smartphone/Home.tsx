// pages/Home.tsx
import React from 'react';
import { IonApp, IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';

// Importar componentes
import CustomButton from '../../components/Smartphone/CustomButton';
import ProtectionStatus from '../../components/Smartphone/ProtectionStatus';
import TodayDose from '../../components/Smartphone/TodayDose';
import CycleCard from '../../components/Smartphone/CycleCard';
import DoseChart from '../../components/Smartphone/DoseChart';
import FriendsSection from '../../components/Smartphone/FriendsSection';

import '../../main.css';

const Home: React.FC = () => {
  const history = useHistory();

  // Handlers para los eventos
  const handleCalendarClick = () => {
    history.push('/calendar');
  };

  const handleRegisterDose = () => {
    console.log('Registrar toma');
  };

  const handleCycleSettings = () => {
    console.log('Ajustes del ciclo');
  };

  const handlePeriodSettings = () => {
    console.log('Ajustes del periodo');
  };

  const handleViewMoreFriends = () => {
    console.log('Ver más amigas');
  };

  const handleRemindFriend = (friend: any) => {
    console.log('Recordar a:', friend.nombre);
  };

  return (
    <IonApp className='bg-[#DF7A92]'>
      <IonPage>
        <IonContent className="min-h-screen pb-24" style={{ background: '#FFDEED' }}>
          {/* Header */}
          <div className="flex items-center px-4 pt-8">
            <img src="/../public/woman.png" alt="Laura" className="w-12 h-12 rounded-full -mr-3 z-40" />
            <h2 className="text-xl font-bold bg-[#DF7A92] text-white px-4 py-1 rounded-lg">Hola, Laura</h2>
          </div>

          {/* Estado de protección */}
          <ProtectionStatus 
            currentPill={20}
            totalPills={28}
            protectionPercentage={80}
          />

          {/* Mascota */}
          <div className="flex justify-center">
            <img src="/../public/assets/images/feliz.png" alt="Mascota" className="w-58 h-58" />
          </div>

          {/* Botón calendario */}
          <div className="flex justify-center mb-2">
            <CustomButton
              expand="block"
              onClick={handleCalendarClick}
              style={{
                '--background': 'var(--color-primary)',
                fontSize: '18px',
                width: '70%',
                marginBottom: '16px',
              }}
            >
              Visualizar Calendario
            </CustomButton>
          </div>

          {/* Toma de hoy */}
          <TodayDose 
            time="08 : 30"
            period="PM"
            nextDoseIn="02:00 hrs"
            onRegisterDose={handleRegisterDose}
          />

          {/* Estado del ciclo */}
          <CycleCard
            title="Estado del ciclo"
            status="En toma"
            startDate="Inicio: 30 de abril"
            endDate="Fin: 28 de mayo"
            cardTitle="Ciclo de duracion"
            cardValue="28"
            cardUnit="días"
            buttonText="Ajustes de la toma"
            cardBackground="var(--color-gradient-1)"
            onButtonClick={handleCycleSettings}
          />

          {/* Ciclo menstrual */}
          <CycleCard
            title="Ciclo menstrual"
            status="Fase de Lútea"
            startDate="Último periodo: 17 de mayo"
            endDate="Próximo periodo: 14 de junio"
            cardTitle="Próximo periodo en"
            cardValue="24"
            cardUnit="días"
            buttonText="Ajustes del periodo"
            cardBackground="var(--color-gradient-1)"
            onButtonClick={handlePeriodSettings}
          />

          {/* Registro de tomas recientes */}
          <DoseChart title="Historial de tomas recientes" />

          {/* Amigas */}
          <FriendsSection 
            onViewMore={handleViewMoreFriends}
            onRemind={handleRemindFriend}
          />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Home;