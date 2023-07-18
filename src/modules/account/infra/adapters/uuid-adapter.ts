import { randomUUID } from 'crypto';

import { IUuidProvider } from '../../core/domain/interfaces/account-providers';

export class UuidAdapter implements IUuidProvider {
    generateUuid(): string {
        return randomUUID();
    }
}
