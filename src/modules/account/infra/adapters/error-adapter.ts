import createHttpError from 'http-errors';

import { IErrorProvider } from '../../core/domain/interfaces/account-providers';

export class ErrorAdapter implements IErrorProvider {
    notFount(): Error {
        return createHttpError.NotFound();
    }
    conflictError(): Error {
        return createHttpError.Conflict();
    }
}
