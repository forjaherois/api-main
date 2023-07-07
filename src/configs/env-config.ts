/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import 'dotenv/config';
import {z} from 'zod';

const envSchema = z.object({
	NODE_ENV: z.enum(['dev', 'test', 'produciton']).default('dev'),
	PORT: z.coerce.number().default(8000),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.error('invalid enviroment variables:', _env.error.errors[0]);
	throw new Error('Invalid enviroment variables');
}

export const env = _env.data;
