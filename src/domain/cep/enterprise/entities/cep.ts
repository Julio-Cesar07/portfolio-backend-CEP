import { Entity } from '@/core/entities/entity';
import { UniqueEntityd } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';
import { Slug } from './value-object/slug';

export interface CepProps {
	nickname: string;
	cep: string;
	slug: Slug;
	created_at: Date;
}

export class CEP extends Entity<CepProps> {
	static register(
		props: Optional<CepProps, 'created_at' | 'slug'>,
		id?: UniqueEntityd
	) {
		const cep = new CEP(
			{
				...props,
				slug: props.slug ?? Slug.createFromText(props.nickname),
				created_at: props.created_at ?? new Date(),
			},
			id
		);

		return cep;
	}

	get cep() {
		return this.props.cep;
	}

	set cep(cep: string) {
		this.props.cep = cep;
	}

	get slug() {
		return this.props.slug;
	}

	set slug(slug: Slug) {
		this.props.slug = slug;
	}
}
