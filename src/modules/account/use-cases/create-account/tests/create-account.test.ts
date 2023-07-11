import { Account } from "@src/modules/account/domain/account";
import { IAccountRepository } from "@src/modules/account/domain/repository";
import createHttpError from "http-errors";
import { v4 as uuidv4 } from "uuid";

import { CreateAccount } from "../create-account";

describe("CreateAccount", () => {
    let accountRepository: IAccountRepository;

    beforeEach(() => {
        accountRepository = {
            getAccountByEmail: jest.fn(),
            createAccount: jest.fn(),
            getAccount: jest.fn(),
            updateAccount: jest.fn(),
        };
    });

    it("should successfully create an account", async () => {
        const accountData = {
            email: "test@test.com",
            password: "password",
            nickname: "nickname",
        };

        const createAccount = new CreateAccount(accountRepository);

        await createAccount.execute(accountData);

        expect(accountRepository.getAccountByEmail).toHaveBeenCalledWith(
            accountData.email
        );

        expect(accountRepository.createAccount).toHaveBeenCalledWith(
            expect.any(Account)
        );
    });

    it("should throw a Conflict error if the account already exists", async () => {
        const accountData = {
            email: "test@test.com",
            password: "password",
            nickname: "nickname",
        };

        accountRepository.getAccountByEmail = jest
            .fn()
            .mockResolvedValue(
                new Account(
                    accountData.email,
                    accountData.password,
                    accountData.nickname,
                    uuidv4()
                )
            );

        const createAccount = new CreateAccount(accountRepository);

        await expect(createAccount.execute(accountData)).rejects.toThrow(
            createHttpError.Conflict
        );
    });
});
