import { Service, ServiceBroker } from "moleculer";
declare class APIService extends Service {
    constructor(broker: ServiceBroker);
    private serviceStart;
}
export default APIService;
