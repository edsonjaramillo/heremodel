import antfu from '@antfu/eslint-config';

export default antfu({
	type: 'app',
	typescript: true,
	pnpm: true,
	react: true,
	stylistic: { indent: 'tab', semi: true },
	rules: {
		'antfu/consistent-list-newline': ['off'],
		'jsonc/sort-keys': ['off'],
		'react-refresh/only-export-components': ['off'],
		'style/arrow-parens': ['off'],
		'style/comma-dangle': ['off'],
		'style/jsx-closing-bracket-location': ['off'],
		'style/quote-props': ['off'],
		indent: ['off'],
	},
	ignores: ['**/*/routeTree.gen.ts'],
});
