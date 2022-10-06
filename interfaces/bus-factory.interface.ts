export abstract class BusFactory {
	abstract exec(command: string, dto: any): Promise<any>;
}
