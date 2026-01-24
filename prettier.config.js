/** @type {import('prettier').Config} */
const config = {
	plugins: ['prettier-plugin-packagejson', '@ianvs/prettier-plugin-sort-imports'],
	trailingComma: 'es5',
	printWidth: 100,
	semi: true,
	useTabs: true,
	singleQuote: true,
	importOrder: [
		'<TYPES>^(node:)',
		'<TYPES>',
		'<TYPES>^[.]',
		'<THIRD_PARTY_MODULES>',
		'^[./]',
		'^(?!.*[.]css$)[./].*$',
		'.css$',
	],
};

export default config;
