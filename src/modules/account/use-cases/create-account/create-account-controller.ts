import { FastifyRequest } from "fastify";

import { createAccountDTO } from "../../domain/use-cases/create-account";
import { CreateAccount } from "./create-account";

export class CreateAccountController {
    constructor(private useCase: CreateAccount) {}
    async handler(request: FastifyRequest): Promise<void> {
        try {
            await this.useCase.execute(request.body as createAccountDTO);
        } catch (err) {
            console.error(err);
        }
    }
}
