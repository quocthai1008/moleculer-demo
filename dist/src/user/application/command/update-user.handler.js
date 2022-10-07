"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserHandler = void 0;
const user_handler_1 = require("../../infrastructure/user.handler");
class UpdateUserHandler {
    constructor(command) {
        this.command = command;
    }
    async execute() {
        const { _id, name, age, address } = this.command;
        const user = new user_handler_1.UserHandler();
        const res = await user.update(_id, name, age, address);
        return res;
    }
}
exports.UpdateUserHandler = UpdateUserHandler;
//# sourceMappingURL=update-user.handler.js.map