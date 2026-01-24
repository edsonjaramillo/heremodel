/** @type {import('prettier').Config} */
const config = {
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
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
	tailwindStylesheet: './src/styles.css',
};

export default config;
