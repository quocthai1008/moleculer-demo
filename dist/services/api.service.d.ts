import { Service, ServiceBroker } from "moleculer";
declare class APIService extends Service {
    constructor(broker: ServiceBroker);
    serviceStart(): Promise<void>;
}
export default APIService;
