import { User } from "../../../schemas/user.schema";
export interface IQuery {
    execute(): Promise<User | User[]>;
}
