"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllHandler = void 0;
const user_handler_1 = require("../../infrastructure/user.handler");
class FindAllHandler {
    constructor() { }
    async execute() {
        const user = new user_handler_1.UserHandler();
        const res = await user.findAll();
        return res;
    }
}
exports.FindAllHandler = FindAllHandler;
//# sourceMappingURL=find-all.handler.js.map