// Request interface para la petición GET de carnet
export interface GetCarnetRequest {
  cedula: string;
  recaptchaToken?: string;
}

// Response interface para la respuesta del carnet
export interface GetCarnetResponse {
  success: boolean;
  data?: Blob; // PDF file
  message?: string;
}

// Error interface para manejo de errores
export interface CarnetError {
  success: false;
  message: string;
  error?: string;
  code?: string;
}

// Request interface para la verificación de carnet
export interface VerifyCarnetRequest {
  token: string; // JWT token que contiene la información del carnet
}

// Metadata del carnet
export interface CarnetMetadata {
  userAgent: string;
  ip: string;
  recaptchaScore: string;
}

// Información detallada del carnet
export interface CarnetInfo {
  id: string;
  cedula: string;
  ficha: number;
  nombre: string;
  programa: string;
  fechaGeneracion: string;
  fechaVencimiento: string;
  estado: 'activo' | 'vencido' | 'inactivo';
  metadata: CarnetMetadata;
  fechaVencimiento_real?: string; // Solo presente cuando está vencido
}

// Response interface para carnet válido
export interface VerifyCarnetValidResponse {
  valid: true;
  message: string;
  status: 'active';
  carnet: CarnetInfo;
  daysRemaining: number;
  expiresOn: string;
  type: 'carnet_validation';
}

// Response interface para carnet vencido o inválido
export interface VerifyCarnetInvalidResponse {
  valid: false;
  message: string;
  status: 'expirado' | 'not_found' | 'inactive';
  carnet?: CarnetInfo; // Puede estar presente si el carnet existe pero está vencido
  type: 'carnet_validation';
}

// Union type para todas las posibles respuestas de verificación
export type VerifyCarnetResponse = VerifyCarnetValidResponse | VerifyCarnetInvalidResponse;

// Error específico para verificación de carnet
export interface VerifyCarnetError {
  success: false;
  message: string;
  error?: string;
  code?: string;
  type: 'carnet_validation';
}