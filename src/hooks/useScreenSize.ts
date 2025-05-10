import { useEffect, useState } from 'react';

type DeviceType = 'smartwatch' | 'mobile' | 'smarttv' | 'desktop';

export const useScreenSize = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;

      // Lógica de detección de dispositivo
      if (width <= 400 || (width <= 500 && aspectRatio < 1)) {
        setDeviceType('smartwatch');
      } else if (width >= 1200 || height >= 800) {
        setDeviceType('smarttv');
      } else {
        setDeviceType('mobile');
      }
    };

    // Ejecutar al montar y al cambiar tamaño
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { deviceType };
};