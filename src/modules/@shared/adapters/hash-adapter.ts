import { hash } from 'bcrypt';

import { IHashProvider } from '../providers/hash-provaider';

export class HashAdapter implements IHashProvider {
    async generateHash(password: string): Promise<string> {
        return hash(password, 10);
    }
}

/*
- [ ] CRIAR TESTE UNITARIO
*/
