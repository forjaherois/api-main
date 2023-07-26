export interface IHashProvider {
    generateHash(password: string): Promise<string>;
}
