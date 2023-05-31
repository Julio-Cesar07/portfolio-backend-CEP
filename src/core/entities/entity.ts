import { UniqueEntityd } from './unique-entity-id';

export class Entity<Props> {
	private _id: UniqueEntityd;
	protected props: Props;

	constructor(props: Props, id?: UniqueEntityd) {
		this.props = props;
		this._id = id ?? new UniqueEntityd(id);
	}

	get id() {
		return this._id;
	}
}
