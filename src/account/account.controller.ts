import { Controller } from "@nestjs/common";
import mongoose from "mongoose";
import { AccountHandler } from "./account.handler";

@Controller()
export class AccountController {
	static accountHandler: AccountHandler;
	constructor(accountHandler: AccountHandler) {
		AccountController.accountHandler = accountHandler;
	}
	static register(username: string, password: string): Promise<string> {
		return AccountController.accountHandler.register(username, password);
	}
}
