import { IQuery } from "@nestjs/cqrs";
import { FindOneQuery } from "./find-one.query";
export declare class FindOneHandler implements IQuery {
    readonly query: FindOneQuery;
    constructor(query: FindOneQuery);
    execute(): Promise<import("../../../../schemas/user.schema").User>;
}
