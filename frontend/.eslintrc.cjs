/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [
    {
      files: [
        '**/*.ts'
      ],
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
      }
    }
  ]
}
