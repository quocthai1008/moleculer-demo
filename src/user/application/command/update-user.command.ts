import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";

@Injectable()
export class UpdateUserCommand {
	constructor(
		readonly _id: mongoose.Types.ObjectId,
		readonly name: string,
		readonly age: number,
		readonly address: string
	) {}
}
