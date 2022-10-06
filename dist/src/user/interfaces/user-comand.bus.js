"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommandBus = void 0;
const bus_factory_interface_1 = require("../../../interfaces/bus-factory.interface");
const create_user_handler_1 = require("../application/command/create-user.handler");
class UserCommandBus extends bus_factory_interface_1.BusFactory {
    async exec(command, dto) {
        let result = "";
        switch (command.toLowerCase()) {
            case "create":
                result = await new create_user_handler_1.CreateUserHandler().execute(dto);
        }
        return result;
    }
}
exports.UserCommandBus = UserCommandBus;
//# sourceMappingURL=user-comand.bus.js.map