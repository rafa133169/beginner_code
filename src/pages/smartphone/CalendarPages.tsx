import React, { useState } from 'react';
import { 
  IonPage, 
  IonApp, 
  IonContent, 
  IonHeader, 
  IonAlert 
} from '@ionic/react';
import '../../main.css';
import { PillRecord } from '../../components/Smartphone/Calendar/types';
import { getDaysInMonth, formatDateString} from '../../utils/dateUtils';
import usePillRecords from '../../hooks/usePillRecords';
import CalendarHeader from '../../components/Smartphone/Calendar/CalendarHeader';
import CalendarGrid from '../../components/Smartphone/Calendar/CalendarGrid';
import TodayPillCard from '../../components/Smartphone/Calendar/TodayPillCard';
import Legend from '../../components/Smartphone/Calendar/Legend';
import PillModal from '../../components/Smartphone/Calendar/PillModal';

const initialRecords: PillRecord[] = [
  {
    id: '1',
    date: '2025-06-20',
    time: '08:00',
    bleeding: false,
    missed: false,
    taken: true,
    notes: 'Tomada a tiempo'
  },
  {
    id: '2',
    date: '2025-06-21',
    time: '08:30',
    taken: false,
    bleeding: true,
    missed: false,
    notes: 'Tomada 30 min tarde'
  },
  {
    id: '3',
    date: '2025-06-22',
    time: '08:00',
    taken: false,
    bleeding: false,
    missed: true,
    notes: 'Olvidada'
  }
];

const sideEffectOptions = [
  'Náuseas',
  'Dolor de cabeza',
  'Sensibilidad en los senos',
  'Cambios de humor',
  'Sangrado irregular',
  'Fatiga'
];

const CalendarPages: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState<Omit<PillRecord, 'id' | 'date'>>({
    time: '08:00',
    taken: true,
    bleeding: false,
    missed: false,
    notes: '',
    sideEffects: []
  });

  const { pillRecords, addOrUpdateRecord, getRecordByDate } = usePillRecords(initialRecords);
  const days = getDaysInMonth(currentDate);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const handleDayClick = (day: number) => {
    const dateString = formatDateString(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(dateString);
    
    const existingRecord = getRecordByDate(dateString);
    if (existingRecord) {
      setFormData({
        time: existingRecord.time,
        taken: existingRecord.taken,
        bleeding: existingRecord.bleeding,
        missed: existingRecord.missed,
        notes: existingRecord.notes || '',
        sideEffects: existingRecord.sideEffects || []
      });
    } else {
      setFormData({
        time: '08:00',
        taken: true,
        bleeding: false,
        missed: false,
        notes: '',
        sideEffects: []
      });
    }
    
    setIsModalOpen(true);
  };

  const handleSave = () => {
    const newRecord: PillRecord = {
      id: Date.now().toString(),
      date: selectedDate,
      ...formData
    };

    addOrUpdateRecord(newRecord);
    setIsModalOpen(false);
    setShowAlert(true);
  };

  const handleFormChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader className="ion-no-border">
          <div className="bg-gradient-to-b from-pink-300 to-white py-6 text-center">
            <h1 className="text-4xl text-rose-600 tracking-tight font-black">
              Calendario
            </h1>
          </div>
          <TodayPillCard />
        </IonHeader>

        <IonContent className="bg-gray-50">
          <CalendarHeader 
            currentDate={currentDate} 
            onMonthChange={navigateMonth} 
          />

          <CalendarGrid 
            days={days} 
            currentDate={currentDate} 
            pillRecords={pillRecords} 
            onDayClick={handleDayClick} 
          />

          <Legend />

          <PillModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedDate={selectedDate}
            formData={formData}
            onFormChange={handleFormChange}
            onSave={handleSave}
            sideEffectOptions={sideEffectOptions}
          />

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="¡Registro guardado!"
            message="El registro de tu pastilla ha sido guardado exitosamente."
            buttons={['OK']}
          />

          <div className="h-20" />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default CalendarPages;