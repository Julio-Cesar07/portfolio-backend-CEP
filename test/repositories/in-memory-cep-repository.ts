import { CepRepository } from '@/domain/cep/aplication/repositories/cep-repository';
import { CEP } from '@/domain/cep/enterprise/entities/cep';

export class InMemoryCepRepository implements CepRepository {
	public items: CEP[] = [];
	async register(cep: CEP): Promise<CEP> {
		this.items.push(cep);
		return cep;
	}
}
