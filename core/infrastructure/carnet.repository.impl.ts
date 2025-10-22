import { apiClient } from '@/lib/api/axios';
import { CarnetRepository, GetCarnetRequest, GetCarnetResponse, CarnetError } from '../domain';

export class CarnetRepositoryImpl implements CarnetRepository {
  async getCarnet(request: GetCarnetRequest): Promise<GetCarnetResponse | CarnetError> {
    try {
      // Cambiar a POST para enviar el token de reCAPTCHA en el body
      const response = await apiClient.post('/carnet', {
        cedula: request.cedula,
        ficha: request.ficha,
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
      // Manejo de errores específicos
      if (error.response?.status === 404) {
        return {
          success: false,
          message: 'Carnet no encontrado',
          code: 'CARNET_NOT_FOUND',
        };
      }

      if (error.response?.status === 400) {
        return {
          success: false,
          message: 'Datos inválidos o verificación reCAPTCHA fallida',
          code: 'INVALID_DATA',
        };
      }

      return {
        success: false,
        message: error.message || 'Error interno del servidor',
        code: 'INTERNAL_ERROR',
      };
    }
  }
}

// Instancia del repository para usar en la aplicación
export const carnetRepository = new CarnetRepositoryImpl();