const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        if (isServer) {
            config.module.rules.push({
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

            config.plugins.push(
                new StyleLintPlugin({
                    context: 'pages',
                    files: ['**/*.less', '**/*.s?(a|c)ss'],
                }),
            );
        }
        return config
    },
};
