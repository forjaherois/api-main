import { randomUUID } from 'crypto';

import { IUuidProvider } from '../providers/uuid-provider';

export class UuidAdapter implements IUuidProvider {
    generateUuid(): string {
        return randomUUID();
    }
}
