import mongoose, { Document } from "mongoose";
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    age: number;
    address: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
