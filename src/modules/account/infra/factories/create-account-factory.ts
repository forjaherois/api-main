import { CreateAccount } from '@src/modules/account/core/use-cases/create-account';
import { AccountsRepository } from '@src/modules/account/infra/account-repository';

import { ErrorAdapter } from '../adapters/error-adapter';
import { HashAdapter } from '../adapters/hash-adapter';
import { UuidAdapter } from '../adapters/uuid-adapter';

class CreateAccountFactory {
    execute(): CreateAccount {
        const repository = new AccountsRepository();
        const hashAdapter = new HashAdapter();
        const errorAdapter = new ErrorAdapter();
        const uuidProvider = new UuidAdapter();
        return new CreateAccount(repository, hashAdapter, errorAdapter, uuidProvider);
    }
}

export const createAccountFactory = new CreateAccountFactory();
