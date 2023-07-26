import { ErrorAdapter } from '@src/modules/@shared/adapters/error-adapter';
import { VerifyTokenAdapter } from '@src/modules/@shared/adapters/handler-token-adapter';

import { AccountsRepository } from '../account-repository';
import { ConfirmAccountController } from '../controllers/confirm-account-controller';
import { ConfirmAccount } from '../use-cases/confirm-account';

export const confirmAccountFactory = () => {
    const makeConfirmAccount = new ConfirmAccount(
        new AccountsRepository(),
        new VerifyTokenAdapter(),
        new ErrorAdapter()
    );
    return new ConfirmAccountController(makeConfirmAccount);
};
