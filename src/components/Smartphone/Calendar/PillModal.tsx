import React from 'react';
import { 
  IonModal, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent,
  IonInput,
  IonTextarea,
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/react';

import { 
  calendarOutline, 
  closeOutline, 
  checkmarkCircleOutline, 
  timeOutline, 
  alertCircleOutline,
  addOutline 
} from 'ionicons/icons';
import { PillRecord } from './types';

interface PillModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  formData: Omit<PillRecord, 'id' | 'date'>;
  onFormChange: (field: string, value: any) => void;
  onSave: () => void;
  sideEffectOptions: string[];
}

const PillModal: React.FC<PillModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  formData,
  onFormChange,
  onSave,
  sideEffectOptions
}) => {
  const handleSideEffectChange = (effect: string, checked: boolean) => {
    const newSideEffects = checked
      ? [...formData.sideEffects || [], effect]
      : (formData.sideEffects || []).filter(e => e !== effect);
    
    onFormChange('sideEffects', newSideEffects);
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar style={{ '--background': '#DF7A92' }}>
          <IonTitle style={{ color: 'white' }}>
            Registrar Pastilla
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose} style={{ '--color': 'white' }}>
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
                  onChange={() => onFormChange('taken', true)}
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
                  onChange={() => onFormChange('taken', false)}
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
                onIonInput={(e) => onFormChange('time', e.detail.value!)}
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
                    checked={(formData.sideEffects || []).includes(effect)}
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
              value={formData.notes || ''}
              onIonInput={(e) => onFormChange('notes', e.detail.value!)}
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
            onClick={onSave}
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
  );
};

export default PillModal;