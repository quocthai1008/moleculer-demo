"use strict";
const mongoose_1 = require("mongoose");
const user_query_bus_1 = require("../src/user/interfaces/user-query.bus");
module.exports = {
    name: "query-user",
    actions: {
        findAll: {
            rest: {
                method: "GET",
                path: "/find-all",
            },
            async handler() {
                return await new user_query_bus_1.UserQueryBus().exec("find-all", {});
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
            async handler(context) {
                const { _id } = context.params;
                return await new user_query_bus_1.UserQueryBus().exec("find-one", {
                    _id: new mongoose_1.default.Types.ObjectId(_id),
                });
            },
        },
        created() { },
    },
};
//# sourceMappingURL=query-user.service.js.map