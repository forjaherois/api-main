import { randomUUID } from 'crypto';

import { IUuidProvider } from '../domain/uuid-provider';

export class UuidAdapter implements IUuidProvider {
    generateUuid(): string {
        return randomUUID();
    }
}
