import { FastifyReply, FastifyRequest } from 'fastify';

import { ConfirmAccount } from '../../core/use-cases/confirm-account';

export class ConfirmController {
    constructor(private useCase: ConfirmAccount) {}

    async handler(
        request: FastifyRequest<{ Params: { token: string } }>,
        response: FastifyReply
    ): Promise<void> {
        try {
            await this.useCase.execute(request.params.token);
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
