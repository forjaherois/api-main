import { IRoute } from "@src/configs/router/route";
import { FastifyInstance } from "fastify";

import { HealthCheckController } from "./health-controller";

export class HealthCheckRouter implements IRoute {
    constructor(private controller: HealthCheckController) {}

    registerRoutes(httpServer: FastifyInstance) {
        httpServer.get("/health-check", async (request, reply) => {
            return this.controller.handler(request, reply);
        });
    }
}
