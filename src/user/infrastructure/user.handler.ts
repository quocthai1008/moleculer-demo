import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { DbConfig } from "../../../config/db.config";
import { UserRepository } from "./user.repository";
import { User, UserSchema } from "../../../schemas/user.schema";

@Injectable()
export class UserHandler implements UserRepository {
	private static userModel: mongoose.Model<User>;

	constructor() {}
	public async delete(_id: mongoose.Types.ObjectId): Promise<string> {
		const model = await UserHandler.getUserModel();
		await model.deleteOne({ _id });
		return "Delete user successfully";
	}

	public async findOne(_id: mongoose.Types.ObjectId): Promise<User> {
		const model = await UserHandler.getUserModel();
		const user = await model.findById(_id);
		return user;
	}

	public async update(
		_id: mongoose.Types.ObjectId,
		name: string,
		age: number,
		address: string
	): Promise<string> {
		const model = await UserHandler.getUserModel();
		await model.updateOne({ _id }, { name, age, address });
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
