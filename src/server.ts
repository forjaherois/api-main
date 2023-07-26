import { fastify } from 'fastify';

import { env } from './infra/env-config';
import { HttpServer } from './infra/http-server';
import { broker } from './modules/@shared/adapters/rabbitmq-adapter';

const httpServer = new HttpServer(env, fastify(), broker);

httpServer.start();
