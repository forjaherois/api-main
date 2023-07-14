import { FastifyReply, FastifyRequest } from 'fastify';

export class HealthCheckController {
    async handler(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        reply.send({ status: 'ok' });
    }
}
