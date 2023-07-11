export type createAccountDTO = {
    email: string;
    password: string;
    nickname: string;
};

export interface ICreateAccount {
    execute(accountData: createAccountDTO): Promise<void>;
}
