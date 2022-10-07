import mongoose from "mongoose";
export declare class UpdateUserCommand {
    readonly _id: mongoose.Types.ObjectId;
    readonly name: string;
    readonly age: number;
    readonly address: string;
    constructor(_id: mongoose.Types.ObjectId, name: string, age: number, address: string);
}
