"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueryBus = void 0;
const bus_factory_interface_1 = require("../../../interfaces/bus-factory.interface");
const find_all_handler_1 = require("../application/query/find-all.handler");
class UserQueryBus extends bus_factory_interface_1.BusFactory {
    async exec(query, dto) {
        let result = {};
        try {
            switch (query.toLowerCase()) {
                case "find-all":
                    result = await new find_all_handler_1.FindAllHandler().execute();
                    console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
        return result;
    }
}
exports.UserQueryBus = UserQueryBus;
//# sourceMappingURL=user-query.bus.js.map