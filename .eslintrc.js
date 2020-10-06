module.exports = {
	extends: ['airbnb-typescript-prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	settings: { 'import/resolver': { node: { paths: ['src'] } } },
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'no-console': 'off',
		'import/prefer-default-export': 'off',
	},
};
