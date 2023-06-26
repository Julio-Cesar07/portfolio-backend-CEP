import { CEP } from '../../enterprise/entities/cep';

export interface CepRepository {
	register(cep: CEP): Promise<CEP>;
}
