import { ICommand } from "src/user/interfaces/command.interface";
import { DeleteUserCommand } from "./delete-user.command";
export declare class DeleteUserHandler implements ICommand {
    readonly command: DeleteUserCommand;
    constructor(command: DeleteUserCommand);
    execute(): Promise<string>;
}
