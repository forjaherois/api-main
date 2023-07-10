import { Account } from "./account";
import { IAccountRepository } from "./repository";

export interface ICreateAccount {
    execute(account: Account, repository: IAccountRepository): Promise<void>;
}
