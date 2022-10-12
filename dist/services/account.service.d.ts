import { Service, ServiceBroker } from "moleculer";
declare class AccountService extends Service {
    constructor(broker: ServiceBroker);
    private register;
}
export default AccountService;
