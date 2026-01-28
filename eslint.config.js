// @ts-check
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(
  {
    files: ["projects/**/*.ts"],
    plugins: {
      '@stylistic': stylistic
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      }
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'no-debugger': ['error'],
      'no-console': ['warn', { allow: ['error'] }],
      'no-prototype-builtins': ['off'],
      '@stylistic/max-len': [
        'error', {
          code: 80,
          tabWidth: 4,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        }
      ],
      '@stylistic/quotes': ['error', 'single'],
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          allowFunctionsWithoutTypeParameters: true,
          allowedNames: [],
          allowIIFEs: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          ignoredMethodNames: [],
          overrides: {
            accessors: 'explicit', constructors: 'off', methods: 'explicit',
            parameterProperties: 'explicit', properties: 'explicit',
          }
        }
      ],
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", style: "camelCase" }
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", style: "kebab-case" }
      ]
    },
  },
  {
    files: ["projects/**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/click-events-have-key-events': ['off'],
      '@angular-eslint/template/interactive-supports-focus': ['off']
    },
  },
  {
    ignores: [
      '.angular',
      '.idea',
      '.vscode',
      'dist',
      'node_modules',
    ]
  }
);
