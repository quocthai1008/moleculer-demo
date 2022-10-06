import { CreateUserCommand } from "./create-user.command";
export declare class CreateUserHandler {
    constructor();
    execute(command: CreateUserCommand): Promise<string>;
}
