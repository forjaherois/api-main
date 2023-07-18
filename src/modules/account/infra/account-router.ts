import { IRoute } from '@src/infra/router/route';
import { FastifyInstance } from 'fastify';

import { CreateAccountController } from './controllers/create-account-controller';
import { createAccountFactory } from './factories/create-account-factory';

export class AccountRouter implements IRoute {
    constructor(
        private createAccountController = new CreateAccountController(
            createAccountFactory.execute()
        )
    ) {}

    registerRoutes(httpServer: FastifyInstance) {
        httpServer.post('/accounts', async (request, reply) => {
            return this.createAccountController.handler(request, reply);
        });
    }
}
