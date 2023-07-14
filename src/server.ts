import { fastify } from 'fastify';

import { env } from './configs/env-config';
import { HttpServer } from './configs/http-server';

const httpServer = new HttpServer(env, fastify());

httpServer.start();
