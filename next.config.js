const StyleLintPlugin = require('stylelint-webpack-plugin');
const { getBabelLoader, fixBabelImports } = require('customize-cra');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: './',
    env: {
        TEST: process.env.TEST,
        CDN_URL: isProd ? 'https://api.example.com' : '.',
    },
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
        
        // else {
        //     console.log(defaultLoaders);
        //     config.module.rules[0].use.options.babelPresetPlugins.push(['import', {
        //         libraryName: 'antd',
        //         libraryDirectory: 'es',
        //         style: true,
        //     }]);
        // }
        // getBabelLoader(config).options.plugins.push('import', {
        //     libraryName: 'antd',
        //     libraryDirectory: 'es',
        //     style: true,
        // });

        // 路径别名
        if (dev) {
            config.resolve.alias['@'] = path.resolve(__dirname, './src');
            config.resolve.alias['@com'] = path.resolve(__dirname, './src/components');
        }
        return config
    },
};
