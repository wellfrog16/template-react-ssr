module.exports = {
    root: true,
    env: {
        node: true,
    },
    globals: {
        'window': true,
    },
    extends: [
        'react-app',
        'airbnb-typescript',
    ],
    rules: {
        indent: [2, 4, { "SwitchCase": 1 }], // 缩进风格
        'max-len': [2, { 'code': 150 }],
        'no-underscore-dangle': 2, // nedb专用
        'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }], // ? 允许 a && a()写法
        'no-param-reassign': 0,
        // 'no-param-reassign': [2, { 'props': true, 'ignorePropertyModificationsFor': ['state', 'item', 'el', 'params'] }], // 允许vuex里的state，备用item, el, params
        'react/jsx-indent': ['error', 4], // 缩进风格
        'react/jsx-indent-props': ['error', 4], // 缩进风格
        '@typescript-eslint/indent': ['error', 4], // 缩进风格

        // 不知道是否是hack了@的原因，无法正确识别到模块，暂时关闭，等待create-react-app官方的@
        // hack方法tsconfig extend了 tsconfig-extra.json来实现@
        // 'import/no-unresolved': 0,

        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'no-debugger': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
        project: './tsconfig.json',
    },
};
