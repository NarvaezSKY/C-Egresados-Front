import { create } from 'zustand';
import { 
  VerifyCarnetRequest, 
  VerifyCarnetResponse, 
  VerifyCarnetError 
} from '@/core/domain/carnet.types';
import { carnetRepository } from '@/core/infrastructure/carnet.repository.impl';

interface VerifyCarnetState {
  // Estados
  isLoading: boolean;
  error: string | null;
  verificationResult: VerifyCarnetResponse | null;
  
  // Acciones
  verifyCarnet: (request: VerifyCarnetRequest) => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

export const useVerifyCarnetStore = create<VerifyCarnetState>((set, get) => ({
  // Estados iniciales
  isLoading: false,
  error: null,
  verificationResult: null,

  // Función para verificar el carnet
  verifyCarnet: async (request: VerifyCarnetRequest) => {
    try {
      set({ isLoading: true, error: null, verificationResult: null });

      const result = await carnetRepository.verifyCarnet(request);

      if ('valid' in result) {
        // Es una respuesta válida (VerifyCarnetResponse)
        set({ 
          isLoading: false, 
          verificationResult: result,
          error: null 
        });
      } else {
        // Es un error (VerifyCarnetError)
        const error = result as VerifyCarnetError;
        set({ 
          isLoading: false, 
          error: error.message,
          verificationResult: null 
        });
      }
    } catch (error) {
      set({ 
        isLoading: false, 
        error: 'Error inesperado al verificar el carnet',
        verificationResult: null 
      });
    }
  },

  // Limpiar errores
  clearError: () => set({ error: null }),

  // Reset del estado
  reset: () => set({ 
    isLoading: false, 
    error: null, 
    verificationResult: null 
  }),
}));