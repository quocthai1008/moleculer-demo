import { Service, ServiceBroker } from "moleculer";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const ApiGateway = require("moleculer-web");

class APIService extends Service {
	constructor(broker: ServiceBroker) {
		super(broker);

		this.parseServiceSchema({
			name: "api",
			mixins: [ApiGateway],
			settings: {
				// Exposed port
				port: process.env.PORT || 3000,

				// Exposed IP
				ip: "0.0.0.0",

				settings: {},
				// Global Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares

				use: [],

				routes: [
					{
						path: "/api",

						whitelist: [""],

						// Enable/disable parameter merging method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Disable-merging
						mergeParams: true,

						// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
						authentication: false,

						// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
						authorization: true,

						autoAliases: true,

						callingOptions: {},

						bodyParsers: {
							json: {
								strict: false,
								limit: "1MB",
							},
							urlencoded: {
								extended: true,
								limit: "1MB",
							},
						},

						mappingPolicy: "all", // Available values: "all", "restrict"

						logging: true,
					},
					{
						path: "/auth",

						whitelist: ["account.register"],

						// Enable/disable parameter merging method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Disable-merging
						mergeParams: true,

						// Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
						authentication: false,

						// Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
						authorization: false,

						autoAliases: true,

						callingOptions: {},

						bodyParsers: {
							json: {
								strict: false,
								limit: "1MB",
							},
							urlencoded: {
								extended: true,
								limit: "1MB",
							},
						},

						mappingPolicy: "all", // Available values: "all", "restrict"

						logging: true,
					},
				],

				log4XXResponses: false,
				logRequestParams: null,
				logResponseData: null,
				assets: {
					folder: "public",
				},
			},

			methods: {
				// authorize(ctx, route, req, res) {
				// 	// Read the token from header
				// 	let auth = req.headers["authorization"];
				// 	if (auth && auth.startsWith("Bearer")) {
				// 		let token = auth.slice(7);
				// 		// Check the token
				// 		if (token == "123456") {
				// 			// Set the authorized user entity to `ctx.meta`
				// 			ctx.meta.user = { id: 1, name: "John Doe" };
				// 			return Promise.resolve(ctx);
				// 		} else {
				// 			// Invalid token
				// 			return Promise.reject("Token invalid");
				// 		}
				// 	} else {
				// 		// No token
				// 		return Promise.reject("No token");
				// 	}
				// },
			},

			started: this.serviceStart,
		});
	}

	async serviceStart() {
		await NestFactory.create(AppModule);
	}
}

export default APIService;
