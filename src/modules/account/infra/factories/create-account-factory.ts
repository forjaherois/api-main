import { ErrorAdapter } from '@src/modules/@shared/adapters/error-adapter';
import { HashAdapter } from '@src/modules/@shared/adapters/hash-adapter';
import { UuidAdapter } from '@src/modules/@shared/adapters/uuid-adapter';
import { CreateAccount } from '@src/modules/account/core/use-cases/create-account';
import { AccountsRepository } from '@src/modules/account/infra/account-repository';
import { broker } from '@src/server';

import { CreateAccountController } from '../controllers/create-account-controller';

export const createAccountFactory = () => {
    const makeCreateAccount = new CreateAccount(
        new AccountsRepository(),
        new HashAdapter(),
        new ErrorAdapter(),
        new UuidAdapter(),
        broker
    );

    return new CreateAccountController(makeCreateAccount);
};
