import { IGeneratorId } from "./genarator-id";

export class Account {
    email: string;
    password: string;
    nickname: string;
    id: string;

    constructor(
        email: string,
        password: string,
        nickname: string,
        idGenerator: IGeneratorId
    ) {
        if (!this.validateEmail(email)) {
            throw new Error("Invalid email");
        }
        if (!this.validatePassword(password)) {
            throw new Error("Invalid password");
        }
        if (!this.validateNickname(nickname)) {
            throw new Error("Invalid nickname");
        }

        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.id = idGenerator.generateId();
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
}
