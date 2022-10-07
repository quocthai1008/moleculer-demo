import { IQuery } from "@nestjs/cqrs";
import { UserHandler } from "../../infrastructure/user.handler";

export class FindAllHandler implements IQuery {
	constructor() {}

	async execute() {
		const user = new UserHandler();

		const res = await user.findAll();
		return res;
	}
}
