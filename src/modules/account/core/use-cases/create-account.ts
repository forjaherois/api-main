import { Account } from '../domain/account';
import {
    IHashProvider,
    IErrorProvider,
    IUuidProvider,
} from '../domain/interfaces/account-providers';
import { IAccountRepository } from '../domain/interfaces/account-repository';
import { ICreateAccount, createAccountDTO } from '../domain/use-cases/create-account';

export class CreateAccount implements ICreateAccount {
    constructor(
        private repository: IAccountRepository,
        private hashProvider: IHashProvider,
        private errorProvider: IErrorProvider,
        private uuidProvider: IUuidProvider
    ) {}

    async execute(accountData: createAccountDTO): Promise<void> {
        const { email, nickname, password } = accountData;
        const account = await this.repository.getAccountByEmail(email);
        if (account) throw this.errorProvider.conflictError();

        const passwordHash = await this.hashProvider.generateHash(password);
        const uuid = this.uuidProvider.generateUuid();
        const newAccount = new Account(email, passwordHash, nickname, uuid);
        await this.repository.createAccount(newAccount);
    }
}
