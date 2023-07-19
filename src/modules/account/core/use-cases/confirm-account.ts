import {
    IErrorProvider,
    IVerifyTokenProvider,
} from '../domain/interfaces/account-providers';
import { IAccountRepository } from '../domain/interfaces/account-repository';
import { IConfirmAccount } from '../domain/use-cases/confirm-account';

export class ConfirmAccount implements IConfirmAccount {
    constructor(
        private repository: IAccountRepository,
        private verifyToken: IVerifyTokenProvider,
        private errorProvider: IErrorProvider
    ) {}

    async execute(token: string): Promise<void> {
        const { email } = this.verifyToken.verify<{ email: string }>(token);
        const account = await this.repository.getAccountByEmail(email);
        if (!account) throw this.errorProvider.notFount();
        if (!account.isConfirmed) {
            this.repository.updateAccountField(account.id, { isConfirmed: true });
        }
    }
}
