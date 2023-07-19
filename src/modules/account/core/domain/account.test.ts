import { v4 as uuidv4 } from 'uuid';

import { Account } from './account';

describe('Account', () => {
    const validUUID = uuidv4();

    it('should correctly instantiate the account and should not be confirmed', () => {
        const account = new Account('test@test.com', 'password', 'nickname', validUUID);
        expect(account).toBeDefined();
        expect(account.id).toEqual(validUUID);
        expect(account.email).toEqual('test@test.com');
        expect(account.password).toEqual('password');
        expect(account.nickname).toEqual('nickname');
        expect(account.isConfirmed).toEqual(false); // Check if isConfirmed is false at instantiation
    });

    it('should throw an error for an invalid email', () => {
        expect(
            () => new Account('invalid-email', 'password', 'nickname', validUUID)
        ).toThrowError(new Error('Invalid email'));
    });

    it('should throw an error for an empty password', () => {
        expect(
            () => new Account('test@test.com', '', 'nickname', validUUID)
        ).toThrowError(new Error('Invalid password'));
    });

    it('should throw an error for an empty nickname', () => {
        expect(
            () => new Account('test@test.com', 'password', '', validUUID)
        ).toThrowError(new Error('Invalid nickname'));
    });

    it('should throw an error for an invalid UUID', () => {
        expect(
            () => new Account('test@test.com', 'password', 'nickname', 'invalid-uuid')
        ).toThrowError(new Error('Invalid UUID'));
    });

    it('should change isConfirmed to true when account is confirmed', () => {
        const account = new Account('test@test.com', 'password', 'nickname', validUUID);
        account.confirmAccount();
        expect(account.isConfirmed).toEqual(true); // Check if isConfirmed is true after confirmation
    });
});
