import { create } from 'zustand';

interface State {
	isOpen: boolean;
}

interface Actions {
	open: () => void;
	close: () => void;
	toggle: () => void;
}

export const useMobileMenu = create<State & Actions>((set) => ({
	isOpen: false,
	open() {
		set(() => ({ isOpen: true }));
	},
	close() {
		set(() => ({ isOpen: false }));
	},
	toggle() {
		set((state) => ({ isOpen: !state.isOpen }));
	},
}));
