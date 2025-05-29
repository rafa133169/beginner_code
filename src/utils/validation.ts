// utils/validation.ts

// Interfaces para tipos de datos
export interface UserData {
  username: string;
  email: string;
  password: string;
}

export interface ValidationErrors {
  username?: string;
  email?: string;
  password?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}

// Clase para manejar validaciones y seguridad
export class SecurityValidator {
  
  // Función para sanitizar entrada (prevenir XSS básico)
  static sanitizeInput(input: string): string {
    return input
      .trim()
      .replace(/[<>'"]/g, '') // Remueve caracteres peligrosos básicos
      .substring(0, 100); // Limita longitud
  }

  // Validación de email
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validación de contraseña segura
  static isValidPassword(password: string): boolean {
    // Al menos 8 caracteres, una mayúscula, una minúscula, un número
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  // Validación de username
  static isValidUsername(username: string): boolean {
    // Solo letras, números y guiones bajos, 3-20 caracteres
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
  }

  // Validación completa del formulario de registro
  static validateRegisterForm(userData: UserData): ValidationResult {
    const errors: ValidationErrors = {};

    // Validar username
    if (!userData.username) {
      errors.username = 'El nombre de usuario es requerido';
    } else if (!this.isValidUsername(userData.username)) {
      errors.username = 'Username: 3-20 caracteres, solo letras, números y _';
    }

    // Validar email
    if (!userData.email) {
      errors.email = 'El email es requerido';
    } else if (!this.isValidEmail(userData.email)) {
      errors.email = 'Por favor ingresa un email válido';
    }

    // Validar contraseña
    if (!userData.password) {
      errors.password = 'La contraseña es requerida';
    } else if (!this.isValidPassword(userData.password)) {
      errors.password = 'Contraseña: mín 8 chars, mayúscula, minúscula y número';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors
    };
  }

  // Sanitizar datos del formulario de registro
  static sanitizeRegisterData(userData: UserData): UserData {
    return {
      username: this.sanitizeInput(userData.username),
      email: this.sanitizeInput(userData.email),
      password: userData.password // No sanitizar contraseña, se debe hashear en backend
    };
  }

  // Validación para login (puedes expandir después)
  static validateLoginForm(credentials: { username: string; password: string }): ValidationResult {
    const errors: any = {};

    if (!credentials.username) {
      errors.username = 'El nombre de usuario es requerido';
    }

    if (!credentials.password) {
      errors.password = 'La contraseña es requerida';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors
    };
  }
}