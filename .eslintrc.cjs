module.exports = {
  env: {
    browser: true, // Enables browser global variables
    es2020: true,  // Enables ES2020 globals and syntax
  },
  extends: [
    'eslint:recommended',                // Core ESLint rules
    'plugin:react/recommended',          // React-specific linting rules
    'plugin:react/jsx-runtime',          // Ensures compatibility with JSX transform
    'plugin:react-hooks/recommended',    // Enforces rules of hooks
  ],
  parserOptions: {
    ecmaVersion: 'latest',               // Use the latest ECMAScript standard
    sourceType: 'module',                // Enables ES modules
  },
  settings: {
    react: {
      version: '18.2',                   // Specifies React version (avoid warnings)
    },
  },
  plugins: ['react-refresh'],            // Adds React Fast Refresh support
  rules: {
    'react-refresh/only-export-components': 'warn', // Warns for non-component exports
  },
};
