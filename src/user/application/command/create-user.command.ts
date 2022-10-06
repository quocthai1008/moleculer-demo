export class CreateUserCommand {
	constructor(
		readonly name: string,
		readonly age: number,
		readonly address: string
	) {}
}
