import { IRoute } from "@src/configs/router/route";
import { FastifyInstance } from "fastify";

import { CreateAccountController } from "./create-account-controller";

export class CreateAccountRouter implements IRoute {
    constructor(private controller: CreateAccountController) {}

    registerRoutes(httpServer: FastifyInstance) {
        httpServer.post("/accounts", async (request) => {
            return this.controller.handler(request);
        });
    }
}
