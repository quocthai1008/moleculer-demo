import { IQuery } from "@nestjs/cqrs";
export declare class FindAllHandler implements IQuery {
    constructor();
    execute(): Promise<import("../../../../schemas/user.schema").User[]>;
}
