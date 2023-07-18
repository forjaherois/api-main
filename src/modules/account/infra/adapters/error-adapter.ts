import createHttpError from 'http-errors';

import { IErrorProvider } from '../../core/domain/interfaces/account-providers';

export class ErrorAdapter implements IErrorProvider {
    conflictError(): Error {
        return createHttpError.Conflict();
    }
}
