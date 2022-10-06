import mongoose from "mongoose";

export class DbConfig {
	private static connection: any = undefined;
	public static async connectDb(): Promise<mongoose.Connection> {
		return new Promise((resolve, reject) => {
			if (!DbConfig.connection) {
				mongoose.createConnection(
					"mongodb+srv://thai1008:thai123@cluster0.f2zvnui.mongodb.net/test",
					{},
					(err, connection) => {
						if (err) {
							reject(err);
						} else {
							console.log("Connected");
							DbConfig.connection = connection;
						}
					}
				);
			}
			resolve(DbConfig.connection);
		});
	}
}
