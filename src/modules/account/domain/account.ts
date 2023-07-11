export class Account {
    readonly email: string;
    readonly password: string;
    readonly nickname: string;
    readonly id: string;

    constructor(email: string, password: string, nickname: string, id: string) {
        if (!this.validateEmail(email)) {
            throw new Error("Invalid email");
        }
        if (!this.validatePassword(password)) {
            throw new Error("Invalid password");
        }
        if (!this.validateNickname(nickname)) {
            throw new Error("Invalid nickname");
        }
        if (!this.validateUUID(id)) {
            throw new Error("Invalid UUID");
        }

        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.id = id;
    }

    private validateEmail(email: string): boolean {
        return /\S+@\S+\.\S+/.test(email);
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
}
