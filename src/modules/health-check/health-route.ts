import { IRoute } from '@src/infra/router/route';
import { FastifyInstance } from 'fastify';

import { HealthCheckController } from './health-controller';

export class HealthCheckRouter implements IRoute {
    constructor(private controller = new HealthCheckController()) {}

    registerRoutes(httpServer: FastifyInstance) {
        httpServer.get('/health-check', async (request, reply) => {
            return this.controller.handler(request, reply);
        });
    }
}
