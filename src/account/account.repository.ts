export interface AccountRepository {
	register(username: string, password: string): Promise<string>;
	login(username: string, password: string): Promise<string>;
}
