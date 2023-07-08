import { HealthCheckController } from "@src/modules/health-check/health-controller";
import { HealthCheckRouter } from "@src/modules/health-check/health-route";

import { IRoute } from "./route";

export class RouterFactory {
    private healthCheckController: HealthCheckController;
    constructor() {
        this.healthCheckController = new HealthCheckController();
    }
    createRoutes(): IRoute[] {
        return [new HealthCheckRouter(this.healthCheckController)];
    }
}
