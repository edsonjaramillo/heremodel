import { extendTailwindMerge } from 'tailwind-merge';

const spacing = ['navigation', 'responsive'] as const;

export const cn = extendTailwindMerge({
	cacheSize: 0,
	extend: {
		theme: {
			spacing,
		},
	},
});
