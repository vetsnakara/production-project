module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],
    rules: {
        quotes: [2, 'single'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-undef': 'off',
        'max-len': [
            'error',
            {
                code: 100,
                ignoreComments: true,
            },
        ],
        'lines-between-class-members': 'off',
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
        'react/jsx-no-useless-fragment': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        // i18next
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                onlyAttribute: [''],
            },
        ],
        // a11y
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
        {
            // use immer in redux toolkit
            files: ['**/src/**/slice/*.ts'],
            rules: {
                'no-param-reassign': 'off',
            },
        },
    ],
};
