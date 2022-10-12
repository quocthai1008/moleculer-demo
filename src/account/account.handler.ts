import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { DbConfig } from "../../config/db.config";
import { InjectModel } from "@nestjs/mongoose";
import { AccountRepository } from "./account.repository";
import { Account, AccountSchema } from "../../schemas/account.schema";
import { hash, compare } from "bcryptjs";

@Injectable()
export class AccountHandler implements AccountRepository {
	constructor(
		@InjectModel(Account.name)
		private accountModel: mongoose.Model<Account>
	) {}

	public async getAccountModel() {
		if (!this.accountModel) {
			const db = await DbConfig.connectDb();
			this.accountModel = db.model("account", AccountSchema);
		}
		return this.accountModel;
	}

	private async getAccountInfo(username: string): Promise<Account> {
		const model = await this.getAccountModel();
		const account = await model.findOne({ username });
		return account;
	}

	public async register(username: string, password: string): Promise<string> {
		const model = await this.getAccountModel();
		const hashPassword = await hash(password, 10);

		const user = await model.create({
			username,
			password: hashPassword,
		});
		await user.save();
		return "Register successfully";
	}

	public async login(username: string, password: string): Promise<string> {
		const account = await this.getAccountInfo(username);
		if (!account) {
			return "username or password invalid";
		}
		const check = compare(password, account.password);
		if (!check) {
			return "username or password invalid";
		}
		return "ok";
	}
}
