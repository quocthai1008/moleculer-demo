"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserHandler = void 0;
const user_handler_1 = require("../../infrastructure/user.handler");
class CreateUserHandler {
    constructor(command) {
        this.command = command;
    }
    async execute() {
        const { name, age, address } = this.command;
        const user = new user_handler_1.UserHandler();
        const res = await user.create(name, age, address);
        return res;
    }
}
exports.CreateUserHandler = CreateUserHandler;
//# sourceMappingURL=create-user.handler.js.map