import { ErrorAdapter } from '@src/modules/@shared/adapters/error-adapter';
import { HashAdapter } from '@src/modules/@shared/adapters/hash-adapter';
import { UuidAdapter } from '@src/modules/@shared/adapters/uuid-adapter';
import { broker } from '@src/server';

import { AccountsRepository } from '../account-repository';
import { CreateAccountController } from '../controllers/create-account-controller';
import { CreateAccount } from '../use-cases/create-account';

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
