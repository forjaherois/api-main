import { Account } from "../account";
import { IGeneratorId } from "../genarator-id";

describe("Account", () => {
    let idGenerator: IGeneratorId;

    beforeEach(() => {
        idGenerator = {
            generateId: jest.fn().mockReturnValue("test-id"),
        };
    });

    it("should correctly instantiate the account", () => {
        const account = new Account(
            "test@test.com",
            "password",
            "nickname",
            idGenerator
        );
        expect(account).toBeDefined();
        expect(account.id).toEqual("test-id");
        expect(account.email).toEqual("test@test.com");
        expect(account.password).toEqual("password");
        expect(account.nickname).toEqual("nickname");
    });

    it("should throw an error for an invalid email", () => {
        expect(
            () =>
                new Account(
                    "invalid-email",
                    "password",
                    "nickname",
                    idGenerator
                )
        ).toThrowError(new Error("Invalid email"));
    });

    it("should throw an error for an empty password", () => {
        expect(
            () => new Account("test@test.com", "", "nickname", idGenerator)
        ).toThrowError(new Error("Invalid password"));
    });

    it("should throw an error for an empty nickname", () => {
        expect(
            () => new Account("test@test.com", "password", "", idGenerator)
        ).toThrowError(new Error("Invalid nickname"));
    });
});
