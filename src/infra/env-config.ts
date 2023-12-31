import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'produciton']).default('dev'),
    PORT: z.coerce.number().default(8000),
    SERVICE_BROKER_URL: z.string(),
    SECRET_TOKEN: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error('invalid environment variables:', parsedEnv.error.errors[0]);
    throw new Error('Invalid environment variables');
}

export interface IEnvironment {
    NODE_ENV: string;
    PORT: number;
    SERVICE_BROKER_URL: string;
    SECRET_TOKEN: string;
}

class Environment implements IEnvironment {
    constructor(
        public NODE_ENV: string,
        public PORT: number,
        public SERVICE_BROKER_URL: string,
        public SECRET_TOKEN: string
    ) {}
}

export const env = new Environment(
    parsedEnv.data.NODE_ENV,
    parsedEnv.data.PORT,
    parsedEnv.data.SERVICE_BROKER_URL,
    parsedEnv.data.SECRET_TOKEN
);
