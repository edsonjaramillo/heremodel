import antfu from '@antfu/eslint-config';

export default antfu({
	type: 'app',
	typescript: true,
	pnpm: true,
	react: true,
	stylistic: { indent: 'tab', semi: true },
	rules: {
		'jsonc/sort-keys': ['off'],
		'style/arrow-parens': ['off'],
		'style/comma-dangle': ['off'],
		'style/quote-props': ['off'],
		indent: ['off'],
	},
	ignores: ['**/*/routeTree.gen.ts'],
});
