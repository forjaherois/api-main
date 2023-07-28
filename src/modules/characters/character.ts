export class Character {
    constructor(readonly idCharacter: string, readonly accountID: string) {
        this.idCharacter = this.validateUUID(idCharacter);
        this.accountID = this.validateUUID(accountID);
    }

    private validateUUID(uuid: string): string {
        const uuidRegex =
            /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
        if (!uuidRegex.test(uuid)) throw new Error('Invalid UUID');

        return uuid;
    }
}

/*
- [x] DEVE CRIAR UM CHARACTER COM ID VÁLIDO
- [x] DEVE CRIAR UM CHARACTER COM ACCOUNT_ID VÁLIDO
- [ ] DEVE CRIAR UM CHARACTER COM NAME VÁLIDO
- [ ] DEVE CRIAR UM CHARACTER COM ALIGNMENT VÁLIDO
- [ ] DEVE CRIAR UM CHARACTER COM ATRIBUTES VÁLIDOS
- [ ] DEVE CALCULAR CORRETAMENTE OS MOD DE ATRIBUTOS
- [ ] DEVE CRIAR UM CHARACTER COM SPEED VÁLIDO
- [ ] DEVE CRIAR UM CHARACTER COM BONUS DE PROFICIENCIA VÁLIDO
- [ ] DEVE CALCULAR CORRETAMENTE OS HIT POINTS
*/
