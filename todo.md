Providers

-   use hoc withProviders to combine all providers

Setup

-   use conventional commits
-   use lint-staged
-   use prettier
-   use https://github.com/trivago/prettier-plugin-sort-imports
-   use serve to show ui test report / test coverage

Storybook

-   use TS for stories args

Tests

-   use TS for jest config
-   use test coverage
-   run tests on pre-push

Linting

-   "lint": "eslint --ignore-path .gitignore .",
-   "plugin:jest-dom/recommended" for linting in RTL test files (see Codevolution tutorial)
-   use prettier as package (+ eslint-config-prettier)
-   max-warnings=0
-   run linting on pre-commit

Mocks

-   use MSW

Modal

-   use react-transition in modal
