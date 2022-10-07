"use strict";
const mongoose_1 = require("mongoose");
const user_comand_bus_1 = require("../src/user/interfaces/user-comand.bus");
module.exports = {
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
            async handler(context) {
                const { name, age, address } = context.params;
                return new user_comand_bus_1.UserCommandBus().commandExecute("create", {
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
            async handler(context) {
                const { _id, name, age, address } = context.params;
                return new user_comand_bus_1.UserCommandBus().commandExecute("update", {
                    _id: new mongoose_1.default.Types.ObjectId(_id),
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
            async handler(context) {
                const { _id } = context.params;
                return new user_comand_bus_1.UserCommandBus().commandExecute("delete", {
                    _id: new mongoose_1.default.Types.ObjectId(_id),
                });
            },
        },
        created() { },
    },
};
//# sourceMappingURL=command-user.service.js.map