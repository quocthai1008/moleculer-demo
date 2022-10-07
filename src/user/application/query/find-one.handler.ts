import { IQuery } from "@nestjs/cqrs";
import { UserHandler } from "../../infrastructure/user.handler";
import { FindOneQuery } from "./find-one.query";

export class FindOneHandler implements IQuery {
	constructor(readonly query: FindOneQuery) {}

	async execute() {
		const { _id } = this.query;
		const user = new UserHandler();

		const res = await user.findOne(_id);
		return res;
	}
}
