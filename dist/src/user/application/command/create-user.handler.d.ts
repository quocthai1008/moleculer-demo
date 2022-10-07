import { ICommand } from "src/user/interfaces/command.interface";
import { CreateUserCommand } from "./create-user.command";
export declare class CreateUserHandler implements ICommand {
    readonly command: CreateUserCommand;
    constructor(command: CreateUserCommand);
    execute(): Promise<string>;
}
