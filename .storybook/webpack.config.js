const path = require('path');

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

    return config;
};
