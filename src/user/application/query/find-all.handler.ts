import { UserHandler } from "../../infrastructure/user.handler";

export class FindAllHandler {
	constructor() {}

	async execute() {
		const user = new UserHandler();

		const res = await user.findAll();
		return res;
	}
}
