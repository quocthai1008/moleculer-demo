"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommandBus = void 0;
const create_user_handler_1 = require("../application/command/create-user.handler");
const delete_user_handler_1 = require("../application/command/delete-user.handler");
const update_user_handler_1 = require("../application/command/update-user.handler");
class UserCommandBus {
    async commandExecute(command, dto) {
        let result = "";
        switch (command.toLowerCase()) {
            case "create":
                result = await new create_user_handler_1.CreateUserHandler(dto).execute();
                break;
            case "update":
                result = await new update_user_handler_1.UpdateUserHandler(dto).execute();
                break;
            case "delete":
                result = await new delete_user_handler_1.DeleteUserHandler(dto).execute();
                break;
        }
        return result;
    }
}
exports.UserCommandBus = UserCommandBus;
//# sourceMappingURL=user-comand.bus.js.map