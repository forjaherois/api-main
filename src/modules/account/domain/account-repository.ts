import { Account } from './account';
import { AccountDTO } from './accountDTO';

export interface IAccountRepository {
    getAccount(id: string): Promise<AccountDTO | null>;
    getAccountByEmail(email: string): Promise<AccountDTO | null>;
    createAccount(account: Account): Promise<void>;
    updateAccount(account: Account): Promise<void>;
}
