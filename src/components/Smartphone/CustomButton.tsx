// components/CustomButton.tsx
import { IonButton } from '@ionic/react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'default' | 'large';
  expand?: 'block' | 'full';
  fill?: 'clear' | 'outline' | 'solid';
  style?: React.CSSProperties;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  size = 'small',
  expand,
  fill = 'solid',
  style,
  className
}) => {
  const defaultStyle = {
    '--background': fill === 'solid' ? 'var(--color-button)' : 'var(--color-button)',
    '--color': 'var(--color-secundary)',
    '--border-radius': '12px',
    '--border-color': fill === 'outline' ? 'var(--color-primary)' : 'transparent',
    '--text-color': 'var(--color-primary)',
    fontWeight: 'bold',
    textTransform: 'none' as const,
    ...style
  };

  return (
    <IonButton
      size={size}
      expand={expand}
      fill={fill}
      style={defaultStyle}
      className={className}
      onClick={onClick}
    >
      {children}
    </IonButton>
  );
};

export default CustomButton;