import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends('prettier', 'plugin:jest/recommended', 'plugin:react/recommended'),

    plugins: {
      jest,
      react,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    files: ['**/*.jsx', '**/*.js'],
    ignores: ['src/__tests__', 'dist/**/*'],

    languageOptions: {
      globals: {
        window: true,
        navigator: true,
        document: true,
      },

      parser: babelParser,
    },

    rules: {
      'no-unused-vars': 1,
      'react/jsx-props-no-spreading': 'off',
    },
  },
]);
