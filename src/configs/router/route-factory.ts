import { FastifyInstance } from "fastify";

import { IRoute } from "./route";

export class RouterFactory {
    public static createRoutes(httpServer: FastifyInstance): IRoute[] {
        return [];
    }
}
