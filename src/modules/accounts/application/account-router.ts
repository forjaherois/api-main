import { IRoute } from '@src/infra/router/route';
import { FastifyInstance } from 'fastify';

import { confirmAccountFactory } from './factories/confirm-account-factory';
import { createAccountFactory } from './factories/create-account-factory';

export class AccountRouter implements IRoute {
    constructor(
        private createAccountController = createAccountFactory(),
        private confirmAccountController = confirmAccountFactory()
    ) {}

    registerRoutes(httpServer: FastifyInstance) {
        httpServer.post('/accounts', async (request, reply) => {
            return this.createAccountController.handler(request, reply);
        });

        httpServer.patch('/accounts/confirm', async (request, reply) => {
            return this.confirmAccountController.handler(request, reply);
        });
    }
}
