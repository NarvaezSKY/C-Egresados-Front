// Request interface para la petición GET de carnet
export interface GetCarnetRequest {
  ficha: string;
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