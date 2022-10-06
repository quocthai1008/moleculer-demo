/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

import { CreateUserDto } from "../src/user/interfaces/dto/create-user.dto";
import { UserCommandBus } from "../src/user/interfaces/user-comand.bus";
import { UserQueryBus } from "../src/user/interfaces/user-query.bus";
import { UserHandler } from "../src/user/infrastructure/user.handler";

export = {
	name: "user",
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
				return new UserCommandBus().exec("create", {
					name,
					age,
					address,
				});
			},
		},

		findAll: {
			rest: {
				method: "GET",
				path: "/findAll",
			},
			async handler(context: any) {
				return await new UserQueryBus().exec("find-all", {});
			},
		},

		created() {},
	},
};
