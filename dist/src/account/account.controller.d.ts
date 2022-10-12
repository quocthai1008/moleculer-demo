import { AccountHandler } from "./account.handler";
export declare class AccountController {
    static accountHandler: AccountHandler;
    constructor(accountHandler: AccountHandler);
    static register(username: string, password: string): Promise<string>;
}
