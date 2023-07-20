import { ConfirmAccount } from '../../core/use-cases/confirm-account';
import { AccountsRepository } from '../account-repository';
import { ErrorAdapter } from '../adapters/error-adapter';
import { VerifyTokenAdapter } from '../adapters/verify-token-adapter';
import { ConfirmAccountController } from '../controllers/confirm-account-controller';

export const confirmAccountFactory = () => {
    const makeConfirmAccount = new ConfirmAccount(
        new AccountsRepository(),
        new VerifyTokenAdapter(),
        new ErrorAdapter()
    );
    return new ConfirmAccountController(makeConfirmAccount);
};
