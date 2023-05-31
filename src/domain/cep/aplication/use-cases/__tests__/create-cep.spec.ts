import { InMemoryCepRepository } from 'test/repositories/in-memory-cep-repository';
import { CreateCepUseCase } from '../create-cep';

let cepRepository: InMemoryCepRepository;
let sut: CreateCepUseCase;

describe('Create Cep', () => {
	beforeEach(() => {
		cepRepository = new InMemoryCepRepository();
		sut = new CreateCepUseCase(cepRepository);
	});

	it('should be able to create a cep in system', async () => {
		const result = await sut.execute({
			cep_number: '00000000',
			nickname: 'casa',
		});

		expect(result.isRight()).toBeTruthy();
		expect(cepRepository.items[0]).toEqual(result.value?.cep);
	});
});
