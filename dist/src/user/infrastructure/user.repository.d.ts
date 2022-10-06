import { User } from "schemas/user.schema";
export interface UserRepository {
    create(name: string, age: number, address: string): Promise<string>;
    findAll(): Promise<User[]>;
    updateOne(name: string, address: string): Promise<string>;
}
