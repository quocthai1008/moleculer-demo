import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";

@Injectable()
export class DeleteUserCommand {
	constructor(
		readonly _id: mongoose.Types.ObjectId,
	) {}
}
