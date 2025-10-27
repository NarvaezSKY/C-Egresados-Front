import { useCallback, useEffect } from 'react';
import { useVerifyCarnetStore } from '@/store/verify-carnet.store';
import type { VerifyCarnetRequest } from '@/core/domain/carnet.types';

export const useVerifyCarnet = () => {
  const { 
    isLoading, 
    error, 
    verificationResult, 
    verifyCarnet, 
    clearError, 
    reset 
  } = useVerifyCarnetStore();

  // Función para verificar el carnet
  const handleVerifyCarnet = useCallback(async (token: string) => {
    const request: VerifyCarnetRequest = { token };
    await verifyCarnet(request);
  }, [verifyCarnet]);

  // Auto-limpiar error después de 10 segundos
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  return {
    // Estados
    isLoading,
    error,
    verificationResult,
    
    // Acciones
    verifyCarnet: handleVerifyCarnet,
    clearError,
    reset,
  };
};