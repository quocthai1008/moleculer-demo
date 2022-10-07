"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneHandler = void 0;
const user_handler_1 = require("../../infrastructure/user.handler");
class FindOneHandler {
    constructor(query) {
        this.query = query;
    }
    async execute() {
        const { _id } = this.query;
        const user = new user_handler_1.UserHandler();
        const res = await user.findOne(_id);
        return res;
    }
}
exports.FindOneHandler = FindOneHandler;
//# sourceMappingURL=find-one.handler.js.map