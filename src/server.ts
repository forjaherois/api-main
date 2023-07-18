import { fastify } from 'fastify';

import { env } from './infra/env-config';
import { HttpServer } from './infra/http-server';

const httpServer = new HttpServer(env, fastify());

httpServer.start();
