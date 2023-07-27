export class Account {
    readonly email: string;
    readonly password: string;
    readonly nickname: string;
    readonly id: string;
    isConfirmed: boolean;

    constructor(email: string, password: string, nickname: string, id: string) {
        this.email = this.validateEmail(email);
        this.password = this.validatePassword(password);
        this.nickname = this.validateNickname(nickname);
        this.id = this.validateUUID(id);
        this.isConfirmed = false;
    }

    private validateEmail(email: string): string {
        const isValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
        if (!isValid) throw new Error('Invalid email');

        return email;
    }

    private validatePassword(password: string): string {
        const isValid = password.length > 0;
        if (!isValid) throw new Error('Invalid password');

        return password;
    }

    private validateNickname(nickname: string): string {
        const isValid = nickname.length > 0;
        if (!isValid) throw new Error('Invalid nickname');
        return nickname;
    }

    private validateUUID(id: string): string {
        const uuidRegex =
            /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
        if (!uuidRegex.test(id)) throw new Error('Invalid UUID');

        return id;
    }

    confirmAccount(): void {
        this.isConfirmed = true;
    }
}
