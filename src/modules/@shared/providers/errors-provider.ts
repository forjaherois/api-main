export interface IErrorProvider {
    conflictError(): Error;
    notFount(): Error;
}
