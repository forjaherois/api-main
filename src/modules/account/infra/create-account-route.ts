import { IRoute } from '@src/infra/router/route';
import { FastifyInstance } from 'fastify';

import { CreateAccountController } from './create-account-controller';

export class CreateAccountRouter implements IRoute {
    constructor(private controller: CreateAccountController) {}

    registerRoutes(httpServer: FastifyInstance) {
        httpServer.post('/accounts', async (request, reply) => {
            return this.controller.handler(request, reply);
            // TODO: CREATE UNIT TEST TO ROUTE
        });
    }
}
