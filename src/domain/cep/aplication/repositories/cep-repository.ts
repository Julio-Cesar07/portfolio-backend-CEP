import { CEP } from '../../enterprise/entities/cep';

export interface CepRepository {
	create(cep: CEP): Promise<CEP>;
}
