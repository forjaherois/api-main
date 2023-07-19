export interface IHashProvider {
    generateHash(password: string): Promise<string>;
}

export interface IErrorProvider {
    conflictError(): Error;
    notFount(): Error;
}

export interface IUuidProvider {
    generateUuid(): string;
}

export interface IBrokerServiceProvider {
    connect(): Promise<void>;
    publish(eventName: string, data: any): Promise<void>;
}

export interface IVerifyTokenProvider {
    verify<T extends { [key: string]: unknown }>(token: string): T;
}
