"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountHandler = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const db_config_1 = require("../../config/db.config");
const mongoose_2 = require("@nestjs/mongoose");
const account_schema_1 = require("../../schemas/account.schema");
const bcryptjs_1 = require("bcryptjs");
let AccountHandler = class AccountHandler {
    constructor(accountModel) {
        this.accountModel = accountModel;
    }
    async getAccountModel() {
        if (!this.accountModel) {
            const db = await db_config_1.DbConfig.connectDb();
            this.accountModel = db.model("account", account_schema_1.AccountSchema);
        }
        return this.accountModel;
    }
    async register(username, password) {
        const model = await this.getAccountModel();
        const hashPassword = await (0, bcryptjs_1.hash)(password, 10);
        const user = await model.create({
            username,
            password: hashPassword,
        });
        await user.save();
        return "Register successfully";
    }
};
AccountHandler = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(account_schema_1.Account.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], AccountHandler);
exports.AccountHandler = AccountHandler;
//# sourceMappingURL=account.handler.js.map