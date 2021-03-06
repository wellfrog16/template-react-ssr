const StyleLintPlugin = require('stylelint-webpack-plugin');
const antdLessLoader = require("./build/next-plugin/next-antd-less");
const withPlugins = require("next-compose-plugins");
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([antdLessLoader], {
    // 资源目录
    assetPrefix: './',
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },

    // 环境变量
    env: {
        TEST: process.env.TEST,
        CDN_URL: isProd ? 'https://api.example.com' : '.',
    },

    // antd 变量修改
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: {},
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        if (!isServer) {
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

            // antd
            // const antStyles = /antd\/.*?\/style.*?/
            // const origExternals = [...config.externals]
            // config.externals = [
            //     (context, request, callback) => {
            //         if (request.match(antStyles)) return callback();
            //         if (typeof origExternals[0] === 'function') {
            //             origExternals[0](context, request, callback);
            //         } else {
            //             callback();
            //         }
            //     },
            //     ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            // ]

            // config.module.rules.unshift({
            //     test: antStyles,
            //     use: 'null-loader',
            // });
        }

        // 路径别名
        config.resolve.alias['@'] = path.resolve(__dirname, './src');
        config.resolve.alias['@com'] = path.resolve(__dirname, './src/components');
        return config
    },
});
