import mongoose from "mongoose";
import { UserRepository } from "./user.repository";
import { User } from "../../../schemas/user.schema";
export declare class UserHandler implements UserRepository {
    private static userModel;
    constructor();
    delete(_id: mongoose.Types.ObjectId): Promise<string>;
    findOne(_id: mongoose.Types.ObjectId): Promise<User>;
    update(_id: mongoose.Types.ObjectId, name: string, age: number, address: string): Promise<string>;
    static getUserModel(): Promise<mongoose.Model<User, {}, {}, {}, any>>;
    create(name: string, age: number, address: string): Promise<string>;
    findAll(): Promise<User[]>;
}
