import { Either, right } from '@/core/either';
import { CepRepository } from '../repositories/cep-repository';
import { CEP } from '../../enterprise/entities/cep';

interface CreateCepUseCaseRequest {
	cep_number: string;
	nickname: string;
}

type CreateCepUseCaseResponse = Either<
	null,
	{
		cep: CEP;
	}
>;

export class CreateCepUseCase {
	constructor(private cepRepository: CepRepository) {}

	async execute({
		cep_number,
		nickname,
	}: CreateCepUseCaseRequest): Promise<CreateCepUseCaseResponse> {
		const cep = CEP.create({
			cep: cep_number,
			nickname,
		});

		this.cepRepository.create(cep);

		return right({
			cep,
		});
	}
}
