import { create } from 'zustand';
import { getCarnetUseCase, type GetCarnetRequest, type CarnetError } from '@/core';

interface CarnetState {
  // Estados
  isLoading: boolean;
  error: string | null;
  success: boolean;
  
  // Acciones
  downloadCarnet: (request: GetCarnetRequest) => Promise<void>;
  clearError: () => void;
  reset: () => void;
}

export const useCarnetStore = create<CarnetState>((set, get) => ({
  // Estados iniciales
  isLoading: false,
  error: null,
  success: false,

  // Función para descargar el carnet
  downloadCarnet: async (request: GetCarnetRequest) => {
    try {
      set({ isLoading: true, error: null, success: false });

      const result = await getCarnetUseCase.execute(request);

      if (result.success) {
        // Crear URL del blob y descargar
        const blob = result.data!;
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `carnet_${request.cedula}_${request.ficha}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        set({ isLoading: false, success: true });
      } else {
        const error = result as CarnetError;
        set({ 
          isLoading: false, 
          error: error.message,
          success: false 
        });
      }
    } catch (error) {
      set({ 
        isLoading: false, 
        error: 'Error inesperado al descargar el carnet',
        success: false 
      });
    }
  },

  // Limpiar errores
  clearError: () => set({ error: null }),

  // Reset del estado
  reset: () => set({ 
    isLoading: false, 
    error: null, 
    success: false 
  }),
}));