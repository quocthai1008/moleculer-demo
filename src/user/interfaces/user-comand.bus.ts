import { BusFactory } from "../../../interfaces/bus-factory.interface";
import { CreateUserHandler } from "../application/command/create-user.handler";

export class UserCommandBus extends BusFactory {
	public async exec(command: string, dto: any): Promise<string> {
		let result = "";
		switch (command.toLowerCase()) {
			case "create":
				result = await new CreateUserHandler().execute(dto);
		}
		return result;
	}
}
