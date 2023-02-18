module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'i18next'],
    rules: {
        'no-unused-vars': 'off',
        quotes: [2, 'single'],
        indent: [2, 4],
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', { code: 100, ignoreComments: true }],
        // import
        'import/no-unresolved': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                '': 'never',
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // react
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.jsx', '.tsx'],
        }],
        // i18next
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            onlyAttribute: [''],
        }],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
