import { BusFactory } from "../../../interfaces/bus-factory.interface";
import { FindAllHandler } from "../application/query/find-all.handler";

export class UserQueryBus extends BusFactory {
	public async exec(query: string, dto: any): Promise<any> {
		let result: any = {};

		try {
			switch (query.toLowerCase()) {
				case "find-all":
					result = await new FindAllHandler().execute();
					console.log(result);
			}
		} catch (error) {
			console.log(error);
		}

		return result;
	}
}
