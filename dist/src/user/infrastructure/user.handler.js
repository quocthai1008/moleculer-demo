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
var UserHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
const common_1 = require("@nestjs/common");
const db_config_1 = require("../../../config/db.config");
const user_schema_1 = require("../../../schemas/user.schema");
let UserHandler = UserHandler_1 = class UserHandler {
    constructor() { }
    async delete(_id) {
        const model = await UserHandler_1.getUserModel();
        await model.deleteOne({ _id });
        return "Delete user successfully";
    }
    async findOne(_id) {
        const model = await UserHandler_1.getUserModel();
        const user = await model.findById(_id);
        return user;
    }
    async update(_id, name, age, address) {
        const model = await UserHandler_1.getUserModel();
        await model.updateOne({ _id }, { name, age, address });
        return "Update user successfully";
    }
    static async getUserModel() {
        if (!UserHandler_1.userModel) {
            const db = await db_config_1.DbConfig.connectDb();
            UserHandler_1.userModel = db.model("user", user_schema_1.UserSchema);
        }
        return UserHandler_1.userModel;
    }
    async create(name, age, address) {
        const model = await UserHandler_1.getUserModel();
        const user = await model.create({
            name,
            age,
            address,
        });
        await user.save();
        return "Create user successfully";
    }
    async findAll() {
        const model = await UserHandler_1.getUserModel();
        const users = await model.find();
        return users;
    }
};
UserHandler = UserHandler_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserHandler);
exports.UserHandler = UserHandler;
//# sourceMappingURL=user.handler.js.map