import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";

@Injectable()
export class FindOneQuery {
	constructor(readonly _id: mongoose.Types.ObjectId) {}
}
