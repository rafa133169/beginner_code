// components/CustomNotification.tsx
import React, { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { 
  checkmarkCircle, 
  alertCircle, 
  warningOutline, 
  informationCircle,
  close 
} from 'ionicons/icons';

interface CustomNotificationProps {
  isOpen: boolean;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

const CustomNotification: React.FC<CustomNotificationProps> = ({
  isOpen,
  type,
  title,
  message,
  onClose,
  duration = 4000
}) => {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const getNotificationConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: checkmarkCircle,
          bgColor: 'bg-gradient-to-r from-green-400 to-green-500',
          iconColor: 'text-white',
          borderColor: 'border-green-300',
          shadowColor: 'shadow-green-200'
        };
      case 'error':
        return {
          icon: alertCircle,
          bgColor: 'bg-gradient-to-r from-red-400 to-red-500',
          iconColor: 'text-white',
          borderColor: 'border-red-300',
          shadowColor: 'shadow-red-200'
        };
      case 'warning':
        return {
          icon: warningOutline,
          bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-400',
          iconColor: 'text-white',
          borderColor: 'border-yellow-300',
          shadowColor: 'shadow-yellow-200'
        };
      case 'info':
        return {
          icon: informationCircle,
          bgColor: 'bg-gradient-to-r from-blue-400 to-blue-500',
          iconColor: 'text-white',
          borderColor: 'border-blue-300',
          shadowColor: 'shadow-blue-200'
        };
      default:
        return {
          icon: informationCircle,
          bgColor: 'bg-gradient-to-r from-gray-400 to-gray-500',
          iconColor: 'text-white',
          borderColor: 'border-gray-300',
          shadowColor: 'shadow-gray-200'
        };
    }
  };

  const config = getNotificationConfig();

  return (
    <div className="fixed top-4 left-4 right-4 z-50 animate-slide-down">
      <div 
        className={`
          ${config.bgColor} 
          ${config.shadowColor}
          rounded-2xl shadow-lg border-l-4 ${config.borderColor}
          backdrop-blur-sm
          transform transition-all duration-300 ease-out
        `}
        style={{
          animation: isOpen ? 'slideDown 0.3s ease-out' : 'slideUp 0.3s ease-in'
        }}
      >
        <div className="flex items-start p-4">
          {/* Ícono */}
          <div className="flex-shrink-0 mr-3">
            <IonIcon 
              icon={config.icon} 
              className={`text-2xl ${config.iconColor} drop-shadow-sm`}
            />
          </div>
          
          {/* Contenido */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-base mb-1 drop-shadow-sm">
              {title}
            </h3>
            <p className="text-white text-sm opacity-95 leading-relaxed drop-shadow-sm">
              {message}
            </p>
          </div>
          
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
          >
            <IonIcon 
              icon={close} 
              className="text-white text-lg drop-shadow-sm"
            />
          </button>
        </div>
        
        {/* Barra de progreso */}
        {duration > 0 && (
          <div className="h-1 bg-white bg-opacity-30 rounded-b-2xl overflow-hidden">
            <div 
              className="h-full bg-white bg-opacity-50 rounded-b-2xl"
              style={{
                animation: `progress ${duration}ms linear forwards`
              }}
            />
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomNotification;