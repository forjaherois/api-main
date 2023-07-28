import { randomUUID } from 'crypto';

import { Character } from './character';

describe('Character', () => {
    it('should successfully create an character', () => {
        expect(() => new Character(randomUUID(), randomUUID())).toBeDefined();
    });
    it('not should create character with invalid id', () => {
        expect(() => new Character('invalidID', randomUUID())).toThrow(
            new Error('Invalid UUID')
        );
    });

    it('not should create character with invalid accountID', () => {
        expect(() => new Character(randomUUID(), 'invalidID')).toThrow(
            new Error('Invalid UUID')
        );
    });
});
