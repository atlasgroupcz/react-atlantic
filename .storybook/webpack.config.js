const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.tsx?$|\.jsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true,
                    presets: [
                        [
                            'react-app',
                            {
                                flow: false,
                                typescript: true,
                            },
                        ],
                    ],
                },
            },
            {
                loader: require.resolve('react-docgen-typescript-loader'),
                options: {
                    tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                },
            },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    config.plugins.push(
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        })
    );

    return config;
};
