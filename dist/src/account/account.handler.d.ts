import mongoose from "mongoose";
import { AccountRepository } from "./account.repository";
import { Account } from "../../schemas/account.schema";
export declare class AccountHandler implements AccountRepository {
    private accountModel;
    constructor(accountModel: mongoose.Model<Account>);
    getAccountModel(): Promise<mongoose.Model<Account, {}, {}, {}, any>>;
    register(username: string, password: string): Promise<string>;
}
