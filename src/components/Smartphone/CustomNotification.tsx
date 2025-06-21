import React, { useEffect, useMemo, useCallback } from 'react';
import { IonIcon } from '@ionic/react';
import {
  checkmarkCircle,
  alertCircle,
  warningOutline,
  informationCircle,
  close
} from 'ionicons/icons';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationConfig {
  icon: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  shadowColor: string;
}

interface CustomNotificationProps {
  isOpen: boolean;
  type: NotificationType;
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

const NOTIFICATION_CONFIGS: Record<NotificationType, NotificationConfig> = {
  success: {
    icon: checkmarkCircle,
    bgColor: 'bg-gradient-to-r from-green-400 to-green-500',
    iconColor: 'text-white',
    borderColor: 'border-green-300',
    shadowColor: 'shadow-green-200'
  },
  error: {
    icon: alertCircle,
    bgColor: 'bg-gradient-to-r from-red-400 to-red-500',
    iconColor: 'text-white',
    borderColor: 'border-red-300',
    shadowColor: 'shadow-red-200'
  },
  warning: {
    icon: warningOutline,
    bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-400',
    iconColor: 'text-white',
    borderColor: 'border-yellow-300',
    shadowColor: 'shadow-yellow-200'
  },
  info: {
    icon: informationCircle,
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-500',
    iconColor: 'text-white',
    borderColor: 'border-blue-300',
    shadowColor: 'shadow-blue-200'
  }
};

const CustomNotification: React.FC<CustomNotificationProps> = ({
  isOpen,
  type,
  title,
  message,
  onClose,
  duration = 4000
}) => {
  const config = useMemo(() => NOTIFICATION_CONFIGS[type], [type]);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen || duration <= 0) return;

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <div
        className={`notification ${config.bgColor} ${config.shadowColor} rounded-2xl shadow-lg border-l-4 ${config.borderColor} backdrop-blur-sm`}
      >
        <div className="flex items-start p-4">
          <div className="flex-shrink-0 mr-3">
            <IonIcon
              icon={config.icon}
              className={`text-2xl ${config.iconColor} drop-shadow-sm`}
              aria-hidden="true"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-base mb-1 drop-shadow-sm">
              {title}
            </h3>
            <p className="text-white text-sm opacity-95 leading-relaxed drop-shadow-sm">
              {message}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
            aria-label="Close notification"
          >
            <IonIcon
              icon={close}
              className="text-white text-lg drop-shadow-sm"
              aria-hidden="true"
            />
          </button>
        </div>

        {duration > 0 && (
          <div className="h-1 bg-white bg-opacity-30 rounded-b-2xl overflow-hidden">
            <div
              className="progress-bar h-full bg-white bg-opacity-50 rounded-b-2xl"
              style={{ '--duration': `${duration}ms` } as React.CSSProperties}
            />
          </div>
        )}
      </div>


    </div>
  );
};

export default React.memo(CustomNotification);