import { AccountsRepository } from "@src/modules/account/database/account-repository";
import { CreateAccount } from "@src/modules/account/use-cases/create-account/create-account";
import { CreateAccountController } from "@src/modules/account/use-cases/create-account/create-account-controller";
import { CreateAccountRouter } from "@src/modules/account/use-cases/create-account/create-account-route";
import { HealthCheckController } from "@src/modules/health-check/health-controller";
import { HealthCheckRouter } from "@src/modules/health-check/health-route";

import { IRoute } from "./route";

export class RouterFactory {
    private healthCheckController: HealthCheckController;
    private createAccountController: CreateAccountController;
    constructor() {
        this.healthCheckController = new HealthCheckController();
        this.createAccountController = new CreateAccountController(
            new CreateAccount(new AccountsRepository())
        );
    }
    createRoutes(): IRoute[] {
        return [
            new HealthCheckRouter(this.healthCheckController),
            new CreateAccountRouter(this.createAccountController),
        ];
    }
}
