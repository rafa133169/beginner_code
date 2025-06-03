// utils/notifications.ts
export interface NotificationState {
  isOpen: boolean;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
}

export class NotificationManager {
  
  // Mensajes y títulos predefinidos para diferentes escenarios
  static readonly NOTIFICATIONS = {
    REGISTER_SUCCESS: {
      title: '¡Cuenta Creada! 🎉',
      message: 'Tu cuenta ha sido creada exitosamente. ¡Bienvenido a nuestra comunidad!'
    },
    REGISTER_ERROR: {
      title: 'Error en el Registro 😞',
      message: 'No pudimos crear tu cuenta. Por favor, inténtalo de nuevo en unos momentos.'
    },
    VALIDATION_ERROR: {
      title: 'Datos Incorrectos ⚠️',
      message: 'Por favor revisa y corrige los errores marcados en el formulario.'
    },
    LOGIN_SUCCESS: {
      title: '¡Bienvenido! 👋',
      message: 'Has iniciado sesión correctamente. ¡Que tengas un gran día!'
    },
    LOGIN_ERROR: {
      title: 'Error de Acceso 🔒',
      message: 'Las credenciales ingresadas no son correctas. Verifica tu usuario y contraseña.'
    },
    NETWORK_ERROR: {
      title: 'Sin Conexión 📶',
      message: 'No pudimos conectar con nuestros servidores. Verifica tu conexión a internet.'
    }
  };

  // Crear notificación de éxito
  static createSuccessNotification(customTitle?: string, customMessage?: string): NotificationState {
    const notification = customTitle && customMessage 
      ? { title: customTitle, message: customMessage }
      : this.NOTIFICATIONS.REGISTER_SUCCESS;
      
    return {
      isOpen: true,
      type: 'success',
      title: notification.title,
      message: notification.message
    };
  }

  // Crear notificación de error
  static createErrorNotification(customTitle?: string, customMessage?: string): NotificationState {
    const notification = customTitle && customMessage 
      ? { title: customTitle, message: customMessage }
      : this.NOTIFICATIONS.REGISTER_ERROR;
      
    return {
      isOpen: true,
      type: 'error',
      title: notification.title,
      message: notification.message
    };
  }

  // Crear notificación de advertencia
  static createWarningNotification(customTitle?: string, customMessage?: string): NotificationState {
    const notification = customTitle && customMessage 
      ? { title: customTitle, message: customMessage }
      : this.NOTIFICATIONS.VALIDATION_ERROR;
      
    return {
      isOpen: true,
      type: 'warning',
      title: notification.title,
      message: notification.message
    };
  }

  // Crear notificación de información
  static createInfoNotification(title: string, message: string): NotificationState {
    return {
      isOpen: true,
      type: 'info',
      title: title,
      message: message
    };
  }

  // Crear notificación de login exitoso
  static createLoginSuccessNotification(): NotificationState {
    const notification = this.NOTIFICATIONS.LOGIN_SUCCESS;
    return {
      isOpen: true,
      type: 'success',
      title: notification.title,
      message: notification.message
    };
  }

  // Crear notificación de error de login
  static createLoginErrorNotification(): NotificationState {
    const notification = this.NOTIFICATIONS.LOGIN_ERROR;
    return {
      isOpen: true,
      type: 'error',
      title: notification.title,
      message: notification.message
    };
  }

  // Crear notificación de error de red
  static createNetworkErrorNotification(): NotificationState {
    const notification = this.NOTIFICATIONS.NETWORK_ERROR;
    return {
      isOpen: true,
      type: 'warning',
      title: notification.title,
      message: notification.message
    };
  }

  // Estado inicial/cerrado
  static createClosedNotification(): NotificationState {
    return {
      isOpen: false,
      type: 'info',
      title: '',
      message: ''
    };
  }
}