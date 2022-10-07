/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

import mongoose from "mongoose";
import { DeleteUserDto } from "src/user/interfaces/dto/delete-user.dto";
import { UpdateUserDto } from "src/user/interfaces/dto/update-user.dto";
import { CreateUserDto } from "../src/user/interfaces/dto/create-user.dto";
import { UserCommandBus } from "../src/user/interfaces/user-comand.bus";

export = {
	name: "command-user",
	actions: {
		create: {
			rest: {
				method: "POST",
				path: "/create",
			},
			params: {
				name: "string",
				age: "number",
				address: "string",
			},
			async handler(context: any) {
				const { name, age, address }: CreateUserDto = context.params;
				return new UserCommandBus().commandExecute("create", {
					name,
					age,
					address,
				});
			},
		},

		update: {
			rest: {
				method: "PUT",
				path: "/update",
			},
			params: {
				_id: "string",
				name: "string",
				age: "number",
				address: "string",
			},
			async handler(context: any) {
				const { _id, name, age, address }: UpdateUserDto =
					context.params;
				return new UserCommandBus().commandExecute("update", {
					_id: new mongoose.Types.ObjectId(_id),
					name,
					age,
					address,
				});
			},
		},

		delete: {
			rest: {
				method: "DELETE",
				path: "/delete",
			},
			params: {
				_id: "string",
			},
			async handler(context: any) {
				const { _id }: DeleteUserDto = context.params;
				return new UserCommandBus().commandExecute("delete", {
					_id: new mongoose.Types.ObjectId(_id),
				});
			},
		},

		created() {},
	},
};
