module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'babel-jest',
        '^.+\\.tsx?$': [
            'babel-jest',
            { configFile: './tests/config/.babelrc' },
        ],
    },
    setupFiles: ['./tests/config/setupTests.js'],
};
