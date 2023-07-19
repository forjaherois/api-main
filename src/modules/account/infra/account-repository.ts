import { PrismaClient } from '@prisma/client';

import { Account } from '../core/domain/account';
import { AccountDTO } from '../core/domain/interfaces/account-DTO';
import { IAccountRepository } from '../core/domain/interfaces/account-repository';

export class AccountsRepository implements IAccountRepository {
    private client: PrismaClient;

    constructor() {
        this.client = new PrismaClient();
    }

    async getAccount(id: string): Promise<AccountDTO | null> {
        const account = await this.client.account.findUnique({ where: { id } });
        if (!account) return null;
        return {
            id: account.id,
            email: account.email,
            nickname: account.nickname,
            isConfirmed: account.isConfirmed,
        };
    }

    async getAccountByEmail(email: string): Promise<AccountDTO | null> {
        const account = await this.client.account.findUnique({ where: { email } });
        if (!account) return null;
        return {
            id: account.id,
            email: account.email,
            nickname: account.nickname,
            isConfirmed: account.isConfirmed,
        };
    }

    async createAccount(account: Account): Promise<void> {
        await this.client.account.create({
            data: {
                id: account.id,
                nickname: account.nickname,
                email: account.email,
                password: account.password,
                isConfirmed: account.isConfirmed,
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
                isConfirmed: account.isConfirmed,
            },
        });
    }

    async updateAccountField(id: string, field: Partial<Account>): Promise<void> {
        await this.client.account.update({
            where: { id },
            data: field,
        });
    }
}
