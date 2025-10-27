import { 
  GetCarnetRequest, 
  GetCarnetResponse, 
  CarnetError,
  VerifyCarnetRequest,
  VerifyCarnetResponse,
  VerifyCarnetError
} from './carnet.types';

// Interface del repository para la infraestructura
export interface CarnetRepository {
  getCarnet(request: GetCarnetRequest): Promise<GetCarnetResponse | CarnetError>;
  verifyCarnet(request: VerifyCarnetRequest): Promise<VerifyCarnetResponse | VerifyCarnetError>;
}