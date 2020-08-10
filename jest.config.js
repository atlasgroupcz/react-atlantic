module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': [
            'babel-jest',
            { configFile: './tests/config/.babelrc' },
        ],
    },
    setupFiles: ['./tests/config/setupTests.js'],
};
