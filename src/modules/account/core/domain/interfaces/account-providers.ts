export interface IHashProvider {
    generateHash(password: string): Promise<string>;
}

export interface IErrorProvider {
    conflictError(): Error;
}

export interface IUuidProvider {
    generateUuid(): string;
}
