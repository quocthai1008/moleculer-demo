import { FindAllHandler } from "../application/query/find-all.handler";
import { FindOneHandler } from "../application/query/find-one.handler";

export class UserQueryBus {
	public async exec(query: string, dto: any): Promise<any> {
		let result: any = {};

		try {
			switch (query.toLowerCase()) {
				case "find-all":
					result = await new FindAllHandler().execute();
					break;
				case "find-one":
					result = await new FindOneHandler(dto).execute();
			}
		} catch (error) {
			console.log(error);
		}

		return result;
	}
}
