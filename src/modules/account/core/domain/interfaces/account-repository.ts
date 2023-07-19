import { Account } from '../account';
import { AccountDTO } from './account-DTO';

export interface IAccountRepository {
    getAccount(id: string): Promise<AccountDTO | null>;
    getAccountByEmail(email: string): Promise<AccountDTO | null>;
    createAccount(account: Account): Promise<void>;
    updateAccount(account: Account): Promise<void>;
    updateAccountField(id: string, field: Partial<Account>): Promise<void>;
}
