import { IBrokerServiceProvider } from '@src/modules/@shared/providers/broker-service-provider';
import { IErrorProvider } from '@src/modules/@shared/providers/errors-provider';
import { IHashProvider } from '@src/modules/@shared/providers/hash-provaider';
import { IUuidProvider } from '@src/modules/@shared/providers/uuid-provider';
import { Account } from '@src/modules/accounts/domain/account';
import { randomUUID } from 'crypto';

import { IAccountRepository } from '../../../domain/repositories/account-repository';
import { CreateAccount } from '../create-account';

describe('CreateAccount', () => {
    let accountRepository: IAccountRepository;
    let hashProvider: IHashProvider;
    let errorProvider: IErrorProvider;
    let uuidProvider: IUuidProvider;
    let brokerServiceProvider: IBrokerServiceProvider;

    beforeEach(() => {
        accountRepository = {
            getAccountByEmail: jest.fn(),
            createAccount: jest.fn(),
            getAccount: jest.fn(),
            updateAccount: jest.fn(),
            updateAccountField: jest.fn(), // mock para 'updateAccountField'
        };

        hashProvider = {
            generateHash: jest.fn(),
        };

        errorProvider = {
            conflictError: jest.fn(),
            notFount: jest.fn(),
        };

        uuidProvider = {
            generateUuid: jest.fn(),
        };

        brokerServiceProvider = {
            publish: jest.fn(),
            connect: jest.fn(), // mock para 'connect'
        };
    });

    it('should successfully create an account', async () => {
        const accountData = {
            email: 'test@test.com',
            password: 'password',
            nickname: 'nickname',
        };

        (hashProvider.generateHash as jest.Mock).mockResolvedValue('hashedPassword');
        (uuidProvider.generateUuid as jest.Mock).mockReturnValue(randomUUID());

        const createAccount = new CreateAccount(
            accountRepository,
            hashProvider,
            errorProvider,
            uuidProvider,
            brokerServiceProvider
        );

        await createAccount.execute(accountData);

        expect(accountRepository.getAccountByEmail).toHaveBeenCalledWith(
            accountData.email
        );
        expect(accountRepository.createAccount).toHaveBeenCalledWith(expect.any(Account));
    });

    it('should throw a Conflict error if the account already exists', async () => {
        const accountData = {
            email: 'test@test.com',
            password: 'password',
            nickname: 'nickname',
        };

        const conflictError = new Error('Conflict error');
        errorProvider.conflictError = jest.fn().mockImplementation(() => {
            throw conflictError;
        });

        accountRepository.getAccountByEmail = jest
            .fn()
            .mockResolvedValue(
                new Account(
                    accountData.email,
                    'hashedPassword',
                    accountData.nickname,
                    randomUUID()
                )
            );

        const createAccount = new CreateAccount(
            accountRepository,
            hashProvider,
            errorProvider,
            uuidProvider,
            brokerServiceProvider
        );

        await expect(createAccount.execute(accountData)).rejects.toThrow(conflictError);
        expect(errorProvider.conflictError).toHaveBeenCalled();
    });
});
