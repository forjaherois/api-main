import { fastify } from "fastify";

import { env } from "./configs/env-config";
import { HttpServer } from "./configs/http-server";

const host = "0.0.0.0";
const port = env.PORT;
const server = fastify();

const httpServer = new HttpServer(host, port, server);
httpServer.start();
