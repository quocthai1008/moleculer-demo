import { Service, ServiceBroker } from "moleculer";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as ApiGateway from "moleculer-web";

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

				routes: [
					{
						path: "/api",

						whitelist: ["**"],

						mergeParams: true,

						authentication: false,

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

						mappingPolicy: "all",

						logging: true,
					},
					{
						path: "/auth",

						whitelist: ["account.register", "account.login"],

						mergeParams: true,
						authentication: false,
						authorization: false,
						autoAliases: true,

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

						mappingPolicy: "all",
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
				async authorize(ctx, route, req, res) {
					let auth = req.headers["authorization"];
					if (auth && auth.startsWith("Bearer")) {
						let token = auth.slice(7);

						const payload = await ctx.call("account.verifyToken", {
							token,
						});

						ctx.meta.user = payload;
						return Promise.resolve(ctx);
					} else {
						return Promise.reject("No token");
					}
				},
			},

			started: this.serviceStart,
		});
	}

	private async serviceStart() {
		await NestFactory.create(AppModule);
	}
}

export default APIService;
