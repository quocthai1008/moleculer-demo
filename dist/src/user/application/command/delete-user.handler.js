"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserHandler = void 0;
const user_handler_1 = require("../../infrastructure/user.handler");
class DeleteUserHandler {
    constructor(command) {
        this.command = command;
    }
    async execute() {
        const { _id } = this.command;
        const user = new user_handler_1.UserHandler();
        const res = await user.delete(_id);
        return res;
    }
}
exports.DeleteUserHandler = DeleteUserHandler;
//# sourceMappingURL=delete-user.handler.js.map