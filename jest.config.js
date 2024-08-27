module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom', // Asegúrate de usar el nombre correcto del entorno
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/tests/**/*.test.ts'], // Ajusta el patrón si es necesario
    coverageDirectory: 'coverage',
  };
  