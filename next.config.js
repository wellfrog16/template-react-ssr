const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        if (isServer) {
            // 设置eslint强制错误
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

            // stylelint校验
            config.plugins.push(
                new StyleLintPlugin({
                    context: './',
                    files: ['**/*.less', '**/*.s?(a|c)ss'],
                }),
            );
        }

        // 路径别名
        config.resolve.alias['@'] = path.resolve(__dirname, './src');
        config.resolve.alias['@com'] = path.resolve(__dirname, './src/components');
        return config
    },
};
