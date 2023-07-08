import { fastify } from "fastify";

import { env } from "./configs/env-config";
import { HttpServer } from "./configs/http-server";

const server = fastify();
const httpServer = new HttpServer(env, server);

httpServer.start();
