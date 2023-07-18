import { FastifyInstance } from 'fastify';

import { IEnvironment } from './env-config';
import { RouterFactory } from './router/route-factory';
import { RouteRegister } from './router/route-register';

export class HttpServer {
    constructor(private environment: IEnvironment, private server: FastifyInstance) {}

    private registerRoutes() {
        const routes = new RouterFactory().createRoutes();
        const routeRegister = new RouteRegister(this.server, routes);
        routeRegister.registerAllRoutes();
    }

    async start() {
        try {
            this.registerRoutes();

            await this.server.listen({
                port: this.environment.PORT,
                host: '0.0.0.0',
            });
            console.log(`✔ ONLINE SERVER AT: http://localhost:${this.environment.PORT}`);
        } catch (err) {
            console.error('Error starting the server:', err);
            process.exit(1);
        }
    }
}
