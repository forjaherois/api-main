import {
    IVerifyTokenProvider,
    IErrorProvider,
} from '../../domain/interfaces/account-providers';
import { IAccountRepository } from '../../domain/interfaces/account-repository';
import { ConfirmAccount } from '../confirm-account';

describe('ConfirmAccount', () => {
    let confirmAccount: ConfirmAccount;
    let mockRepository: IAccountRepository;
    let mockVerifyToken: IVerifyTokenProvider;
    let mockErrorProvider: IErrorProvider;

    beforeEach(() => {
        mockRepository = {
            getAccountByEmail: jest.fn(),
            updateAccountField: jest.fn(),
        } as any;

        mockVerifyToken = {
            verify: jest.fn(),
        } as any;

        mockErrorProvider = {
            notFount: jest.fn(),
        } as any;

        confirmAccount = new ConfirmAccount(
            mockRepository,
            mockVerifyToken,
            mockErrorProvider
        );
    });

    it('should confirm the account if the account exists and is not confirmed', async () => {
        const token = 'token';
        const email = 'test@example.com';
        const accountId = 'account-id';
        const account = { id: accountId, isConfirmed: false };

        (mockVerifyToken.verify as jest.Mock).mockReturnValueOnce({ email });
        (mockRepository.getAccountByEmail as jest.Mock).mockReturnValueOnce(account);

        await confirmAccount.execute(token);

        expect(mockVerifyToken.verify).toBeCalledWith(token);
        expect(mockRepository.getAccountByEmail).toBeCalledWith(email);
        expect(mockRepository.updateAccountField).toBeCalledWith(accountId, {
            isConfirmed: true,
        });
    });

    it('should throw an error if the account does not exist', async () => {
        const token = 'token';
        const email = 'test@example.com';

        (mockVerifyToken.verify as jest.Mock).mockReturnValueOnce({ email });
        (mockRepository.getAccountByEmail as jest.Mock).mockReturnValueOnce(null);

        const error = new Error('Account not found');
        (mockErrorProvider.notFount as jest.Mock).mockReturnValueOnce(error);

        await expect(confirmAccount.execute(token)).rejects.toThrow(error);

        expect(mockVerifyToken.verify).toBeCalledWith(token);
        expect(mockRepository.getAccountByEmail).toBeCalledWith(email);
        expect(mockErrorProvider.notFount).toBeCalled();
    });

    it('should not update the account if it is already confirmed', async () => {
        const token = 'token';
        const email = 'test@example.com';
        const account = { id: 'account-id', isConfirmed: true };

        (mockVerifyToken.verify as jest.Mock).mockReturnValueOnce({ email });
        (mockRepository.getAccountByEmail as jest.Mock).mockReturnValueOnce(account);

        await confirmAccount.execute(token);

        expect(mockVerifyToken.verify).toBeCalledWith(token);
        expect(mockRepository.getAccountByEmail).toBeCalledWith(email);
        expect(mockRepository.updateAccountField).not.toBeCalled();
    });
});
