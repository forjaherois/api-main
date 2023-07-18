import { hash } from 'bcrypt';

import { IHashProvider } from '../../core/domain/interfaces/account-providers';

export class HashAdapter implements IHashProvider {
    async generateHash(password: string): Promise<string> {
        return hash(password, 10);
    }
}
