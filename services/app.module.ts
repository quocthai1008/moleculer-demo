import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { AccountModule } from "../src/account/account.module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.CONNECTION_STRING),
		AccountModule,
	],
})
export class AppModule {}
