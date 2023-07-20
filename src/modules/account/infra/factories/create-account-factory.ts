import { CreateAccount } from '@src/modules/account/core/use-cases/create-account';
import { AccountsRepository } from '@src/modules/account/infra/account-repository';
import { broker } from '@src/server';

import { ErrorAdapter } from '../adapters/error-adapter';
import { HashAdapter } from '../adapters/hash-adapter';
import { UuidAdapter } from '../adapters/uuid-adapter';
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
