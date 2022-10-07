/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
import mongoose from "mongoose";
import { UserQueryBus } from "../src/user/interfaces/user-query.bus";

export = {
	name: "query-user",
	actions: {
		findAll: {
			rest: {
				method: "GET",
				path: "/find-all",
			},
			async handler() {
				return await new UserQueryBus().exec("find-all", {});
			},
		},

		findOne: {
			rest: {
				method: "GET",
				path: "/find-one",
			},
			params: {
				_id: "string",
			},
			async handler(context: any) {
				const { _id } = context.params;
				return await new UserQueryBus().exec("find-one", {
					_id: new mongoose.Types.ObjectId(_id),
				});
			},
		},

		created() {},
	},
};
