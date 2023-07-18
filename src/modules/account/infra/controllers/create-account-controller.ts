import { FastifyReply, FastifyRequest } from 'fastify';

import { createAccountDTO } from '../../core/domain/use-cases/create-account';
import { CreateAccount } from '../../core/use-cases/create-account';

export class CreateAccountController {
    constructor(private useCase: CreateAccount) {}
    async handler(request: FastifyRequest, response: FastifyReply): Promise<void> {
        try {
            await this.useCase.execute(request.body as createAccountDTO);
        } catch (err) {
            console.error(err);
            response.status(409).send();
            // TODO: CREATE LOG ERROR
        }
    }
}
