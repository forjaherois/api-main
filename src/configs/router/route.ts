import { FastifyInstance } from 'fastify';

export interface IRoute {
    registerRoutes(httpServer: FastifyInstance): void;
}
