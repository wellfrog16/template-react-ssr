const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        isServer && config.module.rules.push({
            test: /\.(ts|tsx|js|jsx)$/,
            enforce: "pre",
            exclude: [/node_modules/, /\.next/],
            use: [{
                loader: "eslint-loader",
                options: {
                    emitError: true,
                    useEslintrc: true
                }
            }]
        });
        return config
    },
});
