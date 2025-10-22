import { GetCarnetRequest, GetCarnetResponse, CarnetError } from './carnet.types';

// Interface del repository para la infraestructura
export interface CarnetRepository {
  getCarnet(request: GetCarnetRequest): Promise<GetCarnetResponse | CarnetError>;
}