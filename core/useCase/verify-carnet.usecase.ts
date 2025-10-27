import { 
  CarnetRepository, 
  VerifyCarnetRequest, 
  VerifyCarnetResponse, 
  VerifyCarnetError 
} from '../domain';

export class VerifyCarnetUseCase {
  constructor(private carnetRepository: CarnetRepository) {}

  async execute(request: VerifyCarnetRequest): Promise<VerifyCarnetResponse | VerifyCarnetError> {
    return await this.carnetRepository.verifyCarnet(request);
  }
}

// Factory function para crear la instancia del use case
export const createVerifyCarnetUseCase = (repository: CarnetRepository): VerifyCarnetUseCase => {
  return new VerifyCarnetUseCase(repository);
};