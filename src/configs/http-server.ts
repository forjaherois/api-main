import { FastifyInstance } from "fastify";

import { RouterFactory } from "./router/route-factory";
import { RouteRegister } from "./router/route-register";

export class HttpServer {
    constructor(
        private host: string,
        private port: number,
        private server: FastifyInstance
    ) {}

    private registerRoutes() {
        const routes = RouterFactory.createRoutes();
        const routeRegister = new RouteRegister(this.server, routes);
        routeRegister.registerAllRoutes();
    }

    async start() {
        try {
            this.registerRoutes();

            await this.server.listen({ port: this.port, host: this.host });
            console.log(`✔ ONLINE SERVER AT: http://localhost:${this.port}`);
        } catch (err) {
            console.error("Error starting the server:", err);
            process.exit(1);
        }
    }
}
