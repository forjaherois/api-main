import { AccountRouter } from '@src/modules/account/application/account-router';
import { HealthCheckRouter } from '@src/modules/health-check/health-route';

import { IRoute } from './route';

export class RouterFactory {
    createRoutes(): IRoute[] {
        return [new HealthCheckRouter(), new AccountRouter()];
    }
}
