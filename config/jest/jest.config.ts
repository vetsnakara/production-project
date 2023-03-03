import path from 'path';

const config = {
    globals: {
        __IS_DEV__: false,
        __API__: '',
    },

    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules'],

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',

    modulePaths: ['<rootDir>src'],

    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],

    moduleNameMapper: {
        // mock css modules
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    transformIgnorePatterns: ['node_modules/(?!axios)/'],
};

export default config;
