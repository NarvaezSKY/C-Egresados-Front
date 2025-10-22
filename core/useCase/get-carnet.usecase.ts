import { CarnetRepository, GetCarnetRequest, GetCarnetResponse, CarnetError } from '../domain';

export class GetCarnetUseCase {
  constructor(private carnetRepository: CarnetRepository) {}

  async execute(request: GetCarnetRequest): Promise<GetCarnetResponse | CarnetError> {
    return await this.carnetRepository.getCarnet(request);
  }
}

// Factory function para crear la instancia del use case
export const createGetCarnetUseCase = (repository: CarnetRepository): GetCarnetUseCase => {
  return new GetCarnetUseCase(repository);
};