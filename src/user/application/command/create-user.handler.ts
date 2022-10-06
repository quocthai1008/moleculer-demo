import { UserHandler } from "../../infrastructure/user.handler";
import { CreateUserCommand } from "./create-user.command";

export class CreateUserHandler {
	constructor() {}

	async execute(command: CreateUserCommand) {
		const { name, age, address } = command;

		const user = new UserHandler();

		const res = await user.create(name, age, address);
		return res;
	}
}
