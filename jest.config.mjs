import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['/node_modules', './next/'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/src/**/*.spec.{ts,tsx}'
  ],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },

  testEnvironment: 'jest-environment-jsdom'
};

export default createJestConfig(config);
