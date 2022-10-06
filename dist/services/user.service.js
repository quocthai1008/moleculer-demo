"use strict";
const user_comand_bus_1 = require("../src/user/interfaces/user-comand.bus");
const user_query_bus_1 = require("../src/user/interfaces/user-query.bus");
module.exports = {
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
            async handler(context) {
                const { name, age, address } = context.params;
                return new user_comand_bus_1.UserCommandBus().exec("create", {
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
            async handler(context) {
                return await new user_query_bus_1.UserQueryBus().exec("find-all", {});
            },
        },
        created() { },
    },
};
//# sourceMappingURL=user.service.js.map