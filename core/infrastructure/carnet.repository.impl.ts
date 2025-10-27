import { apiClient } from '@/lib/api/axios';
import { 
  CarnetRepository, 
  GetCarnetRequest, 
  GetCarnetResponse, 
  CarnetError,
  VerifyCarnetRequest,
  VerifyCarnetResponse,
  VerifyCarnetError
} from '../domain';

export class CarnetRepositoryImpl implements CarnetRepository {
  async getCarnet(request: GetCarnetRequest): Promise<GetCarnetResponse | CarnetError> {
    try {
      // Cambiar a POST para enviar el token de reCAPTCHA en el body
      const response = await apiClient.post('/carnet', {
        cedula: request.cedula,
        recaptchaToken: request.recaptchaToken,
      }, {
        responseType: 'blob', // Para recibir el PDF como blob
      });

      if (response.status === 200) {
        return {
          success: true,
          data: response.data,
        };
      }

      return {
        success: false,
        message: 'Error al obtener el carnet',
      };
    } catch (error: any) {
      // Intentar leer la respuesta JSON del backend
      let backendError = null;
      try {
        if (error.response?.data) {
          // Si la respuesta es un blob, convertirlo a texto
          if (error.response.data instanceof Blob) {
            const text = await error.response.data.text();
            backendError = JSON.parse(text);
          } else {
            backendError = error.response.data;
          }
        }
      } catch (parseError) {
        // Si no se puede parsear, usar el error original
      }

      // Manejo de errores específicos
      if (error.response?.status === 404) {
        return {
          success: false,
          message: backendError?.message || 'Carnet no encontrado',
          error: backendError?.error || 'Carnet no encontrado',
          code: 'CARNET_NOT_FOUND',
        };
      }

      if (error.response?.status === 400) {
        return {
          success: false,
          message: backendError?.message || 'Datos inválidos o verificación reCAPTCHA fallida',
          error: backendError?.error || 'Datos inválidos o verificación reCAPTCHA fallida',
          code: 'INVALID_DATA',
        };
      }

      if (error.response?.status === 500) {
        return {
          success: false,
          message: backendError?.message || 'Error interno del servidor',
          error: backendError?.error || 'Error interno del servidor',
          code: 'INTERNAL_ERROR',
        };
      }

      return {
        success: false,
        message: backendError?.message || error.message || 'Error interno del servidor',
        error: backendError?.error || error.message || 'Error interno del servidor',
        code: 'INTERNAL_ERROR',
      };
    }
  }

  async verifyCarnet(request: VerifyCarnetRequest): Promise<VerifyCarnetResponse | VerifyCarnetError> {
    try {
      // Usar GET con el token en la URL
      const response = await apiClient.get(`/api/carnet/verify/${request.token}`);

      if (response.status === 200) {
        return response.data as VerifyCarnetResponse;
      }

      return {
        success: false,
        message: 'Error al verificar el carnet',
        type: 'carnet_validation',
      };
    } catch (error: any) {
      // Intentar leer la respuesta JSON del backend
      let backendError = null;
      try {
        if (error.response?.data) {
          backendError = error.response.data;
        }
      } catch (parseError) {
        // Si no se puede parsear, usar el error original
      }

      // Manejo de errores específicos
      if (error.response?.status === 404) {
        return {
          success: false,
          message: backendError?.message || 'Carnet no encontrado',
          error: backendError?.error || 'Carnet no encontrado',
          code: 'CARNET_NOT_FOUND',
          type: 'carnet_validation',
        };
      }

      if (error.response?.status === 400) {
        return {
          success: false,
          message: backendError?.message || 'Datos inválidos o verificación reCAPTCHA fallida',
          error: backendError?.error || 'Datos inválidos o verificación reCAPTCHA fallida',
          code: 'INVALID_DATA',
          type: 'carnet_validation',
        };
      }

      return {
        success: false,
        message: backendError?.message || error.message || 'Error interno del servidor',
        error: backendError?.error || error.message || 'Error interno del servidor',
        code: 'INTERNAL_ERROR',
        type: 'carnet_validation',
      };
    }
  }
}

// Instancia del repository para usar en la aplicación
export const carnetRepository = new CarnetRepositoryImpl();