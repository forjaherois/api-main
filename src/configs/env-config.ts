import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["dev", "test", "produciton"]).default("dev"),
    PORT: z.coerce.number().default(8000),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error("invalid environment variables:", parsedEnv.error.errors[0]);
    throw new Error("Invalid environment variables");
}

export interface IEnvironment {
    NODE_ENV: string;
    PORT: number;
}

class Environment implements IEnvironment {
    constructor(public NODE_ENV: string, public PORT: number) {}
}

export const env = new Environment(
    parsedEnv.data.NODE_ENV,
    parsedEnv.data.PORT
);
