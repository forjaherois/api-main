import { hash } from "bcrypt";
import createHttpError from "http-errors";
import { v4 as uuidv4 } from "uuid";

import { Account } from "../../domain/account";
import { IAccountRepository } from "../../domain/account-repository";
import { ICreateAccount, createAccountDTO } from "../../domain/use-cases/create-account";

export class CreateAccount implements ICreateAccount {
    constructor(private repository: IAccountRepository) {}

    async execute(accountData: createAccountDTO): Promise<void> {
        const { email, nickname, password } = accountData;
        const account = await this.repository.getAccountByEmail(email);
        if (account) throw createHttpError.Conflict();

        const passwordHash = await hash(password, 10);
        const uuid = uuidv4();
        const newAccount = new Account(email, passwordHash, nickname, uuid);
        await this.repository.createAccount(newAccount);
    }
}
