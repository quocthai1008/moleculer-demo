"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConfig = void 0;
const mongoose_1 = require("mongoose");
class DbConfig {
    static async connectDb() {
        return new Promise((resolve, reject) => {
            if (!DbConfig.connection) {
                mongoose_1.default.createConnection("mongodb+srv://thai1008:thai123@cluster0.f2zvnui.mongodb.net/test", {}, (err, connection) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        console.log("Connected");
                        DbConfig.connection = connection;
                    }
                });
            }
            resolve(DbConfig.connection);
        });
    }
}
exports.DbConfig = DbConfig;
DbConfig.connection = undefined;
//# sourceMappingURL=db.config.js.map