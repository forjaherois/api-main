import fastify from "fastify";

import { RouterFactory } from "./router/route-factory";
import { RouteRegister } from "./router/route-register";

export const httpServer = fastify();

const routes = RouterFactory.createRoutes(httpServer);
const routeRegister = new RouteRegister(httpServer, routes);

routeRegister.registerAllRoutes();
