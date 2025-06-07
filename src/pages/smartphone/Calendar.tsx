import { IonPage, IonApp, IonContent, IonButton, IonIcon, IonInput, IonHeader, IonToolbar, IonTitle, IonModal, IonButtons, IonTextarea, IonCheckbox, IonItem, IonLabel, IonAlert } from '@ionic/react';
import { useState, useRef } from 'react';
import { calendarOutline, addOutline, closeOutline, checkmarkCircleOutline, timeOutline, alertCircleOutline } from 'ionicons/icons';
import '../../main.css'

interface PillRecord {
  id: string;
  date: string;
  time: string;
  taken: boolean;
  missed: boolean;
  bleeding: boolean;
  notes?: string;
  sideEffects?: string[];
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [pillRecords, setPillRecords] = useState<PillRecord[]>([
    {
      id: '1',
      date: '2025-06-20',
      time: '08:00',
      bleeding: false,
      missed:false,
      taken: true,
      notes: 'Tomada a tiempo'
    },
    {
      id: '2',
      date: '2025-06-21',
      time: '08:30',
      taken: false,
        bleeding: true,
      missed:false,
      notes: 'Tomada 30 min tarde'
    },
    {
      id: '3',
      date: '2025-06-22',
      time: '08:00',
      taken: false,
      bleeding: false,
      missed:true,
      notes: 'Olvidada'
    }
  ]);

  const [formData, setFormData] = useState({
    time: '08:00',
    taken: true,
    bleeding:false,
    missed:false,
    notes: '',
    sideEffects: [] as string[]
  });

  const modal = useRef<HTMLIonModalElement>(null);

  const sideEffectOptions = [
    'Náuseas',
    'Dolor de cabeza',
    'Sensibilidad en los senos',
    'Cambios de humor',
    'Sangrado irregular',
    'Fatiga'
  ];

  // Obtener días del mes
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Días vacíos al inicio
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatDateString = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getPillStatusForDate = (dateString: string) => {
    return pillRecords.find(record => record.date === dateString);
  };

  const handleDayClick = (day: number) => {
    const dateString = formatDateString(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(dateString);
    
    const existingRecord = getPillStatusForDate(dateString);
    if (existingRecord) {
      setFormData({
        time: existingRecord.time,
        taken: existingRecord.taken,
          bleeding: existingRecord.bleeding,
      missed:existingRecord.missed,
        notes: existingRecord.notes || '',
        sideEffects: existingRecord.sideEffects || []
      });
    } else {
      setFormData({
        time: '08:00',
        taken: true,
          bleeding: false,
      missed:false,
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
      time: formData.time,
      taken: formData.taken,
      bleeding: formData.bleeding,
      missed:formData.missed,
      notes: formData.notes,
      sideEffects: formData.sideEffects
    };

    setPillRecords(prev => {
      const filtered = prev.filter(record => record.date !== selectedDate);
      return [...filtered, newRecord];
    });

    setIsModalOpen(false);
    setShowAlert(true);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const handleSideEffectChange = (effect: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      sideEffects: checked 
        ? [...prev.sideEffects, effect]
        : prev.sideEffects.filter(e => e !== effect)
    }));
  };

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const days = getDaysInMonth(currentDate);

  return (
    <IonApp>
      <IonPage>
        <IonHeader className="ion-no-border">
          <div className="bg-gradient-to-b from-pink-300 to-white py-6 text-center">
            <h1 className="text-4xl  text-rose-600 tracking-tight font-black ">
              Calendario
            </h1>
          </div>
           <div className="flex items-center justify-between bg-white border-2 border-pink-300 rounded-xl shadow-md p-4 mx-4 mt-4">
      {/* ícono de reloj */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2QfvJ23egn5F9onjExdH6fzLpXIRNEqkuA&s"
        alt="clock"
        className="w-16 h-16 object-contain"
      />

      {/* información central */}
      <div className="flex flex-col items-center flex-1 px-4">
        <h2 className="text-black font-bold text-lg">TOMA DE HOY</h2>
        <p className="text-gray-500 text-sm">21 de mayo</p>

        <div className="flex items-end mt-2 space-x-1">
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            0
          </div>
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            8
          </div>
          <span className="text-2xl font-bold text-pink-400">:</span>
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            3
          </div>
          <div className="bg-pink-100 border border-pink-400 rounded-md px-2 py-1 text-2xl font-mono">
            0
          </div>
          <span className="ml-1 text-sm font-semibold text-gray-500">Pm</span>
        </div>

        <p className="text-gray-400 text-xs mt-2">Próxima toma en 02:00 hrs</p>
      </div>

      {/* botón */}
      {/* <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-4 py-2 rounded-full shadow">
        Registrar toma
      </button> */}
    </div>
        </IonHeader>


        <IonContent className="bg-gray-50">
          {/* Header del calendario */}
          <div className="bg-white shadow-sm border-b border-gray-200 ">
            <div className="flex justify-center items-center space-x-4 mb-4 border-b-4 border-black">
              <IonButton fill="clear" onClick={() => navigateMonth('prev')} className="text-black text-2xl">
                <span className="text-2xl">&laquo;</span>
              </IonButton>

              <div className="bg-pink-400 text-black font-black tracking-tighter rounded-full px-6 py-2 text-xl border border-black shadow-md">
                {monthNames[currentDate.getMonth()].toUpperCase()}
              </div>

              <IonButton fill="clear" onClick={() => navigateMonth('next')} className="text-black text-2xl">
                <span className="text-2xl">&raquo;</span>
              </IonButton>
            </div>


            {/* Días de la semana */}
            <div className="grid grid-cols-7 border-t border-gray-200">
              {dayNames.map(day => (
                <div key={day} className="p-3 text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Calendario */}
         <div className="bg-pink-100 mx-4 mt-4 rounded-xl shadow-lg overflow-hidden p-2">
          <div className="grid grid-cols-7 gap-1"      onClick={() => handleDayClick(day)} >
            {days.map((day, index) => {
              if (day === null) {
                return <div key={index} className="h-20 bg-pink-200 rounded-md shadow-md" />;
              }

              const dateString = formatDateString(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day
              );
              const pillStatus = getPillStatusForDate(dateString);
              const isToday = dateString === new Date().toISOString().split('T')[0];

             const getIcon = () => {
              if (!pillStatus) return null;
              if (pillStatus.bleeding) {
                return '🩸'; // sangrado
              } else if (pillStatus.missed) {
                return '📄'; // pastilla olvidada
              } else if (pillStatus.taken) {
                return '🟠'; // pastilla tomada
              } else {
                return '⚪'; // sin tomar
              }
            };

              return (
                <div
                  key={index}
                  className={`h-20 bg-pink-200 rounded-md shadow-md relative border border-pink-300 ${
                    isToday ? 'ring-2 ring-blue-400' : ''
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {/* franja superior */}
                  <div className="absolute top-0 left-0 right-0 h-3 bg-rose-400 rounded-t-md" />
                  
                  {/* número del día */}
                  <div className="flex items-center justify-center h-full text-black text-xl font-bold">
                    {day}
                  </div>

                  {/* ícono */}
                  {pillStatus && (
                    <div className="absolute bottom-1 right-1 text-2xl">
                      {getIcon()}
                    </div>
                  )}
                </div>
                
              );
            })}
          </div>
</div>


          {/* Leyenda */}
          <div className="mx-4 mt-4 bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Leyenda</h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600">Tomada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm text-gray-600">No tomada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-600">Hoy</span>
              </div>
            </div>
          </div>

          {/* Modal para registrar pastilla */}
          <IonModal ref={modal} isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
            <IonHeader>
              <IonToolbar style={{ '--background': '#DF7A92' }}>
                <IonTitle style={{ color: 'white' }}>
                  Registrar Pastilla
                </IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => setIsModalOpen(false)} style={{ '--color': 'white' }}>
                    <IonIcon icon={closeOutline} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>

            <IonContent>
              <div className="p-4">
                {/* Fecha seleccionada */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <IonIcon icon={calendarOutline} style={{ color: '#DF7A92', fontSize: '24px' }} />
                    <div>
                      <h3 className="font-semibold text-gray-800">Fecha seleccionada</h3>
                      <p className="text-gray-600">
                        {new Date(selectedDate).toLocaleDateString('es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Estado de la pastilla */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Estado de la pastilla
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="taken"
                        checked={formData.taken === true}
                        onChange={() => setFormData(prev => ({ ...prev, taken: true }))}
                        className="text-green-600"
                      />
                      <IonIcon icon={checkmarkCircleOutline} className="text-green-600 text-xl" />
                      <span className="text-gray-800">Tomada</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="taken"
                        checked={formData.taken === false}
                        onChange={() => setFormData(prev => ({ ...prev, taken: false }))}
                        className="text-red-600"
                      />
                      <IonIcon icon={alertCircleOutline} className="text-red-600 text-xl" />
                      <span className="text-gray-800">No tomada</span>
                    </label>
                  </div>
                </div>

                {/* Hora */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hora
                  </label>
                  <div className="relative">
                    <IonIcon 
                      icon={timeOutline} 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                    />
                    <IonInput
                      value={formData.time}
                      onIonInput={(e) => setFormData(prev => ({ ...prev, time: e.detail.value! }))}
                      type="time"
                      fill="outline"
                      style={{
                        '--border-color': '#e5e7eb',
                        '--border-radius': '12px',
                        '--padding-start': '40px',
                        '--padding-end': '16px'
                      }}
                    />
                  </div>
                </div>

                {/* Efectos secundarios */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Efectos secundarios (opcional)
                  </label>
                  <div className="space-y-2">
                    {sideEffectOptions.map(effect => (
                      <IonItem key={effect} lines="none" className="rounded-xl border border-gray-200 mb-2">
                        <IonCheckbox
                          slot="start"
                          checked={formData.sideEffects.includes(effect)}
                          onIonChange={(e) => handleSideEffectChange(effect, e.detail.checked)}
                          style={{ '--color-checked': '#DF7A92' }}
                        />
                        <IonLabel className="ml-3">{effect}</IonLabel>
                      </IonItem>
                    ))}
                  </div>
                </div>

                {/* Notas */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notas adicionales (opcional)
                  </label>
                  <IonTextarea
                    value={formData.notes}
                    onIonInput={(e) => setFormData(prev => ({ ...prev, notes: e.detail.value! }))}
                    placeholder="Agrega cualquier observación..."
                    fill="outline"
                    rows={3}
                    style={{
                      '--border-color': '#e5e7eb',
                      '--border-radius': '12px',
                      '--padding-start': '16px',
                      '--padding-end': '16px',
                      '--padding-top': '12px',
                      '--padding-bottom': '12px'
                    }}
                  />
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
                    fontWeight: 'bold'
                  }}
                >
                  <IonIcon icon={addOutline} slot="start" />
                  Guardar registro
                </IonButton>
              </div>
            </IonContent>
          </IonModal>

          {/* Alert de confirmación */}
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="¡Registro guardado!"
            message="El registro de tu pastilla ha sido guardado exitosamente."
            buttons={['OK']}
          />

          {/* Espaciado inferior */}
          <div className="h-20" />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Calendar;