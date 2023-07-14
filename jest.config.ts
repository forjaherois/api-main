import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    clearMocks: true,
    bail: true,
    coverageProvider: 'v8',
    preset: 'ts-jest',
    testMatch: ['**/*.test.ts'],
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
};

export default config;
