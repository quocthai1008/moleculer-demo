"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserHandler = void 0;
const user_handler_1 = require("../../infrastructure/user.handler");
class CreateUserHandler {
    constructor() { }
    async execute(command) {
        const { name, age, address } = command;
        const user = new user_handler_1.UserHandler();
        const res = await user.create(name, age, address);
        return res;
    }
}
exports.CreateUserHandler = CreateUserHandler;
//# sourceMappingURL=create-user.handler.js.map