import { carnetRepository } from './infrastructure/carnet.repository.impl';
import { createGetCarnetUseCase } from './useCase';

// Instancia lista para usar en el store
export const getCarnetUseCase = createGetCarnetUseCase(carnetRepository);

// Re-exportar tipos necesarios para el store
export type { GetCarnetRequest, GetCarnetResponse, CarnetError } from './domain';