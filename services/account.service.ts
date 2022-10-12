import { Service, ServiceBroker } from "moleculer";

import { AccountController } from "../src/account/account.controller";
import { RegisterDto } from "../src/interfaces/dto/register.dto";

class AccountService extends Service {
	constructor(broker: ServiceBroker) {
		super(broker);

		this.parseServiceSchema({
			name: "account",

			actions: {
				register: {
					rest: {
						method: "POST",
						path: "/register",
					},
					params: {
						username: "string",
						password: { type: "string", min: 6 },
					},
					handler: this.register,
				},
			},
		});
	}

	private async register(ctx: any) {
		const { username, password }: RegisterDto = ctx.params;
		const res = await AccountController.register(username, password);
		return res;
	}
}

export default AccountService;
