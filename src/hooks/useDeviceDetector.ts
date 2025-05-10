import { useState, useEffect, useCallback } from 'react';

type DeviceType = 'smartwatch' | 'mobile' | 'smarttv';

export const useDeviceDetector = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('mobile');

  const detectDevice = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    const diagonal = Math.sqrt(width * width + height * height) / 96; // pulgadas
    const aspectRatio = width / height;

    if (width <= 320 || (width <= 400 && aspectRatio < 1.1)) {
      return 'smartwatch';
    } else if (diagonal >= 24 || width >= 1920) {
      return 'smarttv';
    }
    return 'mobile';
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(detectDevice());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [detectDevice]);

  return deviceType;
};