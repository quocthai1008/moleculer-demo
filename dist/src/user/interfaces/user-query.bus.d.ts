import { BusFactory } from "../../../interfaces/bus-factory.interface";
export declare class UserQueryBus extends BusFactory {
    exec(query: string, dto: any): Promise<any>;
}
