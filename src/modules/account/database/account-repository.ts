import { PrismaClient } from '@prisma/client';

import { Account } from '../domain/account';
import { IAccountRepository } from '../domain/account-repository';
import { AccountDTO } from '../domain/accountDTO';

export class AccountsRepository implements IAccountRepository {
    private client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    async getAccount(id: string): Promise<AccountDTO | null> {
        const account = await this.client.account.findUnique({ where: { id } });
        if (!account) return null;
        return { id: account.id, email: account.email, nickname: account.nickname };
    }

    async getAccountByEmail(email: string): Promise<AccountDTO | null> {
        const account = await this.client.account.findUnique({ where: { email } });
        if (!account) return null;
        return { id: account.id, email: account.email, nickname: account.nickname };
    }

    async createAccount(account: Account): Promise<void> {
        await this.client.account.create({
            data: {
                id: account.id,
                nickname: account.nickname,
                email: account.email,
                password: account.password,
            },
        });
    }

    async updateAccount(account: Account): Promise<void> {
        await this.client.account.create({
            data: {
                id: account.id,
                nickname: account.nickname,
                email: account.email,
                password: account.password,
            },
        });
    }
}
