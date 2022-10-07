import { ICommand } from "src/user/interfaces/command.interface";
import { UserHandler } from "../../infrastructure/user.handler";
import { UpdateUserCommand } from "./update-user.command";

export class UpdateUserHandler implements ICommand {
	constructor(readonly command: UpdateUserCommand) {}

	public async execute(): Promise<string> {
		const { _id, name, age, address } = this.command;

		const user = new UserHandler();

		const res = await user.update(_id, name, age, address);
		return res;
	}
}
