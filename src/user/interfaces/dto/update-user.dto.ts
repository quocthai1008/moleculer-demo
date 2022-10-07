import mongoose from "mongoose";

export class UpdateUserDto {
	_id: mongoose.Types.ObjectId;
	name: string;
	age: number;
	address: number;
}
