"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const ApiGateway = require("moleculer-web");
class APIService extends moleculer_1.Service {
    constructor(broker) {
        super(broker);
        this.parseServiceSchema({
            name: "api",
            mixins: [ApiGateway],
            settings: {
                port: process.env.PORT || 3000,
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
                    }
                    else {
                        return Promise.reject("No token");
                    }
                },
            },
            started: this.serviceStart,
        });
    }
    async serviceStart() {
        await core_1.NestFactory.create(app_module_1.AppModule);
    }
}
exports.default = APIService;
//# sourceMappingURL=api.service.js.map