import { FastifyReply, FastifyRequest } from 'fastify';

import { ConfirmAccount } from '../use-cases/confirm-account';

export class ConfirmAccountController {
    constructor(private useCase: ConfirmAccount) {}

    async handler(request: FastifyRequest, response: FastifyReply): Promise<void> {
        try {
            const { token } = request.headers;
            await this.useCase.execute(token as string);
        } catch (err) {
            console.error(err);
            response.status(500).send();
            /*
            - [ ] CRIAR LOGGER E TRATAMENTO DE ERROS
            - [ ] CRIAR TESTE UNITARIO
            */
        }
    }
}
