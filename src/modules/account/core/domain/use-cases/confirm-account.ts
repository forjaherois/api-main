export interface IConfirmAccount {
    execute(token: string): Promise<void>;
}
