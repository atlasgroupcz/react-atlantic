module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.tsx?$|\.jsx?$/,
        exclude: /node_modules/,
        use: [require.resolve('babel-loader')],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');

    return config;
};
