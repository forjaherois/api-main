import { IErrorProvider } from '@src/modules/@shared/providers/errors-provider';
import { IHandlerTokenProvider } from '@src/modules/@shared/providers/handler-token-provider';

import { IAccountRepository } from '../../domain/repositories/account-repository';
import { IConfirmAccount } from '../../domain/use-cases/confirm-account';

export class ConfirmAccount implements IConfirmAccount {
    constructor(
        private repository: IAccountRepository,
        private verifyToken: IHandlerTokenProvider,
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
