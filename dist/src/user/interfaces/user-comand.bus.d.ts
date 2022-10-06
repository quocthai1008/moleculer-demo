import { BusFactory } from "../../../interfaces/bus-factory.interface";
export declare class UserCommandBus extends BusFactory {
    exec(command: string, dto: any): Promise<string>;
}
