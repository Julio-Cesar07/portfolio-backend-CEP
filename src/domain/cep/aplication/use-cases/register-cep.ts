import { Either, right } from '@/core/either';
import { CepRepository } from '../repositories/cep-repository';
import { CEP } from '../../enterprise/entities/cep';

interface RegisterCepUseCaseRequest {
	cep_number: string;
	nickname: string;
}

type RegisterCepUseCaseResponse = Either<
	null,
	{
		cep: CEP;
	}
>;

export class RegisterCepUseCase {
	constructor(private cepRepository: CepRepository) {}

	async execute({
		cep_number,
		nickname,
	}: RegisterCepUseCaseRequest): Promise<RegisterCepUseCaseResponse> {
		const cep = CEP.register({
			cep: cep_number,
			nickname,
		});

		this.cepRepository.register(cep);

		return right({
			cep,
		});
	}
}
