import { create } from 'zustand';

interface HomepageNavState {
	isPastHero: boolean;
}

interface HomepageNavActions {
	setPastHero: (value: boolean) => void;
	reset: () => void;
}

export const useHomepageNav = create<HomepageNavState & HomepageNavActions>((set) => ({
	isPastHero: false,
	setPastHero(value) {
		set(() => ({ isPastHero: value }));
	},
	reset() {
		set(() => ({ isPastHero: false }));
	},
}));
