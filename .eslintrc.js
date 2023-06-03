module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        'import/newline-after-import': ['error', { count: 1 }],
        'simple-import-sort/exports': 'error',
        'import/no-default-export': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': 'error',
        'react/jsx-uses-react': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'max-len': 'off',
        'eol-last': 'error',
        'no-console': 'off',
        'prefer-const': 'warn',
        quotes: ['warn', 'single'],
        'jsx-quotes': ['warn', 'prefer-single'],

        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              ['^react', '^@?\\w'],
              ['^@screens|screens$', '^@components', '^\\.'],
              ['^@modules'],
              ['^@services|services$|api$|utils$'],
              ['^@hooks'],
              ['^@store|redux$'],
              ['^\\u0000'],
              ['^@constants|constants$'],
              ['^@typings|typings$|interface$|types$'],
              ['^.+\\.s?css$|styles$'],
              ['^@theme'],
              ['^@assets'],
            ],
          },
        ],
      },
    },
  ],
}
