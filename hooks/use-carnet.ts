import { useCallback, useEffect } from 'react';
import { useCarnetStore } from '@/store/carnet.store';
import type { GetCarnetRequest } from '@/core';

export const useCarnet = () => {
  const { 
    isLoading, 
    error, 
    success, 
    downloadCarnet, 
    clearError, 
    reset 
  } = useCarnetStore();

  // Función para descargar el carnet
  const handleDownloadCarnet = useCallback(async (cedula: string, ficha: string, recaptchaToken?: string) => {
    const request: GetCarnetRequest = { cedula, ficha, recaptchaToken };
    await downloadCarnet(request);
  }, [downloadCarnet]);

  // Auto-limpiar error después de 5 segundos
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  // Auto-limpiar success después de 3 segundos
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        reset();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, reset]);

  return {
    // Estados
    isLoading,
    error,
    success,
    
    // Acciones
    downloadCarnet: handleDownloadCarnet,
    clearError,
    reset,
  };
};