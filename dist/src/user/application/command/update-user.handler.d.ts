import { ICommand } from "src/user/interfaces/command.interface";
import { UpdateUserCommand } from "./update-user.command";
export declare class UpdateUserHandler implements ICommand {
    readonly command: UpdateUserCommand;
    constructor(command: UpdateUserCommand);
    execute(): Promise<string>;
}
