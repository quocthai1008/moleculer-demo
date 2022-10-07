import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	age: number;

	@Prop({ required: true })
	address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
