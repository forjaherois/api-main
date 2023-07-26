import { fastify } from 'fastify';

import { env } from './infra/env-config';
import { HttpServer } from './infra/http-server';
import { RabbitMQAdapter } from './modules/@shared/adapters/rabbitmq-adapter';

export const broker = new RabbitMQAdapter();
const httpServer = new HttpServer(env, fastify(), broker);

httpServer.start();
