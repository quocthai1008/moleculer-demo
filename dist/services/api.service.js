"use strict";
const db_config_1 = require("../config/db.config");
const config_1 = require("@nestjs/config");
const ApiGateway = require("moleculer-web");
module.exports = {
    name: "api",
    mixins: [ApiGateway],
    settings: {
        port: process.env.PORT || 3000,
        ip: "0.0.0.0",
        settings: {},
        use: [],
        routes: [
            {
                path: "/api",
                whitelist: ["**"],
                use: [],
                mergeParams: true,
                authentication: false,
                authorization: false,
                autoAliases: true,
                aliases: {},
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
        ],
        log4XXResponses: false,
        logRequestParams: null,
        logResponseData: null,
        assets: {
            folder: "public",
            options: {},
        },
    },
    actions: {},
    started() {
        config_1.ConfigModule.forRoot();
        (async () => {
            await db_config_1.DbConfig.connectDb();
        })();
    },
};
//# sourceMappingURL=api.service.js.map