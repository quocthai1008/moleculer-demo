import mongoose from "mongoose";
import { User } from "../../../schemas/user.schema";

export interface UserRepository {
	create(name: string, age: number, address: string): Promise<string>;
	update(
		_id: mongoose.Types.ObjectId,
		name: string,
		age: number,
		address: string
	): Promise<string>;
	delete(_id: mongoose.Types.ObjectId): Promise<string>;
	findAll(): Promise<User[]>;
	findOne(_id: mongoose.Types.ObjectId): Promise<User>;
}
