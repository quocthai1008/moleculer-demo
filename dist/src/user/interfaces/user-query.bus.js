"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueryBus = void 0;
const find_all_handler_1 = require("../application/query/find-all.handler");
const find_one_handler_1 = require("../application/query/find-one.handler");
class UserQueryBus {
    async exec(query, dto) {
        let result = {};
        try {
            switch (query.toLowerCase()) {
                case "find-all":
                    result = await new find_all_handler_1.FindAllHandler().execute();
                    break;
                case "find-one":
                    result = await new find_one_handler_1.FindOneHandler(dto).execute();
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