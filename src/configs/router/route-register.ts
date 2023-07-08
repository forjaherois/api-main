import { FastifyInstance } from "fastify";

import { IRoute } from "./route";

export class RouteRegister {
    constructor(
        private readonly httpServe: FastifyInstance,
        private readonly routes: IRoute[]
    ) {}

    registerAllRoutes() {
        this.routes.forEach((route) => {
            route.registerRoutes(this.httpServe);
        });
    }
}
