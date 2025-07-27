import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    js.configs.recommended,

    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                window: true,
                document: true,
                setTimeout: true,
                clearTimeout: true,
                console: true,
                localStorage: true,
                sessionStorage: true,
                fetch: true,
                alert: true,
                navigator: true,
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
            prettier: prettierPlugin,
        },
        rules: {
            // JS
            'no-unused-vars': 'warn',
            'no-console': 'off',

            // React
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-uses-vars': 'error',

            // React Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Accessibility
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
            'jsx-a11y/click-events-have-key-events': 'warn',

            // Prettier
            'prettier/prettier': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    // Prettier disables conflicting rules
    prettierConfig,
];
