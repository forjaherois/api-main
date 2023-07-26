import createHttpError from 'http-errors';

import { IErrorProvider } from '../providers/errors-provider';

export class ErrorAdapter implements IErrorProvider {
    notFount(): Error {
        return createHttpError.NotFound();
    }
    conflictError(): Error {
        return createHttpError.Conflict();
    }
}
