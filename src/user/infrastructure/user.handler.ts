import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { DbConfig } from "../../../config/db.config";
import { UserRepository } from "./user.repository";
import { User, UserSchema } from "../../../schemas/user.schema";

@Injectable()
export class UserHandler implements UserRepository {
	private static userModel: mongoose.Model<User>;

	constructor() {}

	public async updateOne(name: string, address: string): Promise<string> {
		const model = await UserHandler.getUserModel();
		await model.updateOne({ name }, { address });
		return "Update user successfully";
	}

	public static async getUserModel() {
		if (!UserHandler.userModel) {
			const db = await DbConfig.connectDb();
			UserHandler.userModel = db.model("user", UserSchema);
		}
		return UserHandler.userModel;
	}

	public async create(
		name: string,
		age: number,
		address: string
	): Promise<string> {
		const model = await UserHandler.getUserModel();
		const user = await model.create({
			name,
			age,
			address,
		});
		await user.save();
		return "Create user successfully";
	}

	public async findAll(): Promise<User[]> {
		const model = await UserHandler.getUserModel();
		const users = await model.find();
		return users;
	}
}
