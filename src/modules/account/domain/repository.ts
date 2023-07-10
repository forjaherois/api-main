import { Account } from "./account";

export interface IAccountRepository {
    getAccount(id: string): Promise<Account>;
    getAccountByEmail(email: string): Promise<Account>;
    createAccount(account: Account): Promise<Account>;
    updateAccount(account: Account): Promise<Account>;
}
