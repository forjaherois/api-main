import { IRoute } from "@src/configs/router/route";
import { FastifyInstance } from "fastify";

import { HealthCheckController } from "./health-controller";

const healthCheckController = new HealthCheckController();

export class HealthCheckRouter implements IRoute {
    registerRoutes(httpServer: FastifyInstance): void {
        httpServer.get("/health", async (request, reply) => {
            return healthCheckController.handler(request, reply);
        });
    }
}
