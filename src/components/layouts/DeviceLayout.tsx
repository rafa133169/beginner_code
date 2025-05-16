import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import SmartwatchLayout from './SmartwatchLayout';
import MobileLayout from './MobileLayout';
import SmartTVLayout from './SmartTVLayout';

const DeviceLayout: React.FC = () => {
  const history = useHistory();
  const [deviceType, setDeviceType] = useState<'smartwatch' | 'mobile' | 'smarttv'>();
  const initialized = useRef(false);
  const resizeTimeout = useRef<number | null>(null);

  const getDeviceType = (): 'smartwatch' | 'mobile' | 'smarttv' => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    if (width <= 400 && height <= 400) {  // Pantallas muy pequeñas
      return 'smartwatch';
    }
    if (width >= 1920 && height >= 1080 && aspectRatio >= 1.7) {  // Pantallas grandes y anchas
      return 'smarttv';
    }
    return 'mobile';  
  };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const handleDeviceChange = (newType: 'smartwatch' | 'mobile' | 'smarttv') => {
      setDeviceType(newType);
      history.replace(`/${newType}`);
    };

    const initialType = getDeviceType();
    handleDeviceChange(initialType);

    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }

      resizeTimeout.current = window.setTimeout(() => {
        const newType = getDeviceType();
        setDeviceType(prevType => {
          if (prevType !== newType) {
            handleDeviceChange(newType);
            return newType;
          }
          return prevType;
        });
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, [history]);

  if (deviceType === undefined) {
    return null; 
  }

  return (
    <IonApp>
      <SmartTVLayout></SmartTVLayout>
      {/* {deviceType === 'smartwatch' && <SmartwatchLayout />}
      {deviceType === 'smarttv' && <SmartTVLayout />}
      {deviceType === 'mobile' && <MobileLayout />} */}
    </IonApp>
  );
};

export default DeviceLayout;