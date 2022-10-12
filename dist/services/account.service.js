"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const account_controller_1 = require("../src/account/account.controller");
class AccountService extends moleculer_1.Service {
    constructor(broker) {
        super(broker);
        this.parseServiceSchema({
            name: "account",
            actions: {
                register: {
                    rest: {
                        method: "POST",
                        path: "/register",
                    },
                    params: {
                        username: "string",
                        password: { type: "string", min: 6 },
                    },
                    handler: this.register,
                },
            },
        });
    }
    async register(ctx) {
        const { username, password } = ctx.params;
        const res = await account_controller_1.AccountController.register(username, password);
        return res;
    }
}
exports.default = AccountService;
//# sourceMappingURL=account.service.js.map