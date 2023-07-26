import { hash } from 'bcrypt';

import { IHashProvider } from '../domain/hash-provaider';

export class HashAdapter implements IHashProvider {
    async generateHash(password: string): Promise<string> {
        return hash(password, 10);
    }
}
