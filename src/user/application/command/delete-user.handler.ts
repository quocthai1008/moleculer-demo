import { ICommand } from "src/user/interfaces/command.interface";
import { UserHandler } from "../../infrastructure/user.handler";
import { DeleteUserCommand } from "./delete-user.command";

export class DeleteUserHandler implements ICommand {
	constructor(readonly command: DeleteUserCommand) {}

	public async execute(): Promise<string> {
		const { _id } = this.command;

		const user = new UserHandler();

		const res = await user.delete(_id);
		return res;
	}
}
