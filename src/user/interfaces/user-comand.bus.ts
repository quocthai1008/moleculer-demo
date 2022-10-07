import { CreateUserHandler } from "../application/command/create-user.handler";
import { DeleteUserHandler } from "../application/command/delete-user.handler";
import { UpdateUserHandler } from "../application/command/update-user.handler";

export class UserCommandBus {
	public async commandExecute(command: string, dto: any) {
		let result = "";
		switch (command.toLowerCase()) {
			case "create":
				result = await new CreateUserHandler(dto).execute();
				break;
			case "update":
				result = await new UpdateUserHandler(dto).execute();
				break;
			case "delete":
				result = await new DeleteUserHandler(dto).execute();
				break;
		}
		return result;
	}
}
