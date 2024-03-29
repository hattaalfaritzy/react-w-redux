module.exports = {
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': 'off',
        'import/named': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'no-console': 'off',
        'linebreak-style': 'off',
        'global-require': 'off',
        'comma-dangle': ['off', 'never'],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'no-undef': ['off', { typeof: true }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-useless-catch': 'off',
        'max-len': [
            'off',
            {
                code: 160,
                tabWidth: 4,
            },
        ],
    },
};
