/** @type {import('prettier').Config} */
const config = {
	printWidth: 100,
	useTabs: true,
	semi: true,
	singleQuote: true,
	bracketSameLine: true,
	trailingComma: 'es5',
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
	importOrder: [
		'<TYPES>^(node:)',
		'<TYPES>',
		'<TYPES>^[.]',
		'<THIRD_PARTY_MODULES>',
		'^[./]',
		'^(?!.*[.]css$)[./].*$',
		'.css$',
	],
	tailwindStylesheet: './src/styles.css',
};

export default config;
