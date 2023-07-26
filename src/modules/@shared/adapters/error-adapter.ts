import createHttpError from 'http-errors';

import { IErrorProvider } from '../domain/errors-provider';

export class ErrorAdapter implements IErrorProvider {
    notFount(): Error {
        return createHttpError.NotFound();
    }
    conflictError(): Error {
        return createHttpError.Conflict();
    }
}
