export interface IHandlerTokenProvider {
    verify<T extends { [key: string]: unknown }>(token: string): T;
}
