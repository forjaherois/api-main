import { env } from '@src/infra/env-config';
import createHttpError from 'http-errors';
import { verify } from 'jsonwebtoken';

import { IHandlerTokenProvider } from '../domain/handler-token-provider';

export class VerifyTokenAdapter implements IHandlerTokenProvider {
    verify<T extends { [key: string]: unknown }>(token: string): T {
        try {
            const decoded = verify(token, env.SECRET_TOKEN);
            return decoded as T;
        } catch (error) {
            throw createHttpError.Unauthorized();
        }
    }
}
