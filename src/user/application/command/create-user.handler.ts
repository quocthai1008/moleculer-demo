import { ICommand } from "src/user/interfaces/command.interface";
import { UserHandler } from "../../infrastructure/user.handler";
import { CreateUserCommand } from "./create-user.command";

export class CreateUserHandler implements ICommand {
	constructor(readonly command: CreateUserCommand) {}

	public async execute(): Promise<string> {
		const { name, age, address } = this.command;

		const user = new UserHandler();

		const res = await user.create(name, age, address);
		return res;
	}
}
