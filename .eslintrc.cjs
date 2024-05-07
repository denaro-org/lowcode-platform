module.exports = {
    extends: ['@denaro-config/vue3'],

    overrides: [
        {
            // ts
            files: ['*.ts', '*.tsx'],
            extends: ['@denaro-config/typescript'],
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: 2020,
                sourceType: 'module',
                jsxPragma: 'React',
                ecmaFeatures: {
                    jsx: true,
                    tsx: true
                }
            }
        }
    ],
    ignorePatterns: ['.eslintrc.*', 'commitlint.config.*', 'cz.config.*']
}
