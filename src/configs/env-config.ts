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

export const env = parsedEnv.data;
