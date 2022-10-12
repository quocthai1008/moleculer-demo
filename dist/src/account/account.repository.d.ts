export interface AccountRepository {
    register(username: string, password: string): Promise<string>;
}
