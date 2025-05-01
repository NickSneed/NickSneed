export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};