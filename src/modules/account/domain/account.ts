export class Account {
    readonly email: string;
    readonly password: string;
    readonly nickname: string;
    readonly id: string;
    isConfirmed: boolean;

    constructor(
        email: string,
        password: string,
        nickname: string,
        id: string,
        isConfirmed = false
    ) {
        if (!this.validateEmail(email)) {
            throw new Error('Invalid email');
        }
        if (!this.validatePassword(password)) {
            throw new Error('Invalid password');
        }
        if (!this.validateNickname(nickname)) {
            throw new Error('Invalid nickname');
        }
        if (!this.validateUUID(id)) {
            throw new Error('Invalid UUID');
        }

        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.id = id;
        this.isConfirmed = isConfirmed;
    }

    private validateEmail(email: string): boolean {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    }

    private validatePassword(password: string): boolean {
        return password.length > 0;
    }

    private validateNickname(nickname: string): boolean {
        return nickname.length > 0;
    }

    private validateUUID(id: string): boolean {
        const uuidRegex =
            /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
        return uuidRegex.test(id);
    }

    confirmAccount(): void {
        this.isConfirmed = true;
    }
}
// TODO:
/*
- [ ] Criar value object de email
- [ ] Criar Value Object uuid
- [ ] Criar value Object de password
- 
*/
