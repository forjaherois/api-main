import { HealthCheckRouter } from "@src/modules/health-check/health-route";

import { IRoute } from "./route";

export class RouterFactory {
    public static createRoutes(): IRoute[] {
        return [new HealthCheckRouter()];
    }
}
