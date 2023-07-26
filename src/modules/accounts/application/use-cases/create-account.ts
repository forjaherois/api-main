import { IBrokerServiceProvider } from '@src/modules/@shared/providers/broker-service-provider';
import { IErrorProvider } from '@src/modules/@shared/providers/errors-provider';
import { IHashProvider } from '@src/modules/@shared/providers/hash-provaider';
import { IUuidProvider } from '@src/modules/@shared/providers/uuid-provider';

import { Account } from '../../domain/account';
import { IAccountRepository } from '../../domain/repositories/account-repository';
import { ICreateAccount, createAccountDTO } from '../../domain/use-cases/create-account';

export class CreateAccount implements ICreateAccount {
    constructor(
        private repository: IAccountRepository,
        private hashProvider: IHashProvider,
        private errorProvider: IErrorProvider,
        private uuidProvider: IUuidProvider,
        private broker: IBrokerServiceProvider
    ) {}

    async execute(accountData: createAccountDTO): Promise<void> {
        const { email, nickname, password } = accountData;
        const account = await this.repository.getAccountByEmail(email);
        if (account) throw this.errorProvider.conflictError();

        const passwordHash = await this.hashProvider.generateHash(password);
        const uuid = this.uuidProvider.generateUuid();
        const newAccount = new Account(email, passwordHash, nickname, uuid);
        await this.repository.createAccount(newAccount);

        await this.broker.publish('accountCreated', {
            accountId: newAccount.id,
            accountEmail: newAccount.email,
        });
    }
}
