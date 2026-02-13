import { useLocation } from '@tanstack/react-router';

export function NavigationSpacer() {
	const { pathname } = useLocation();
	if (pathname === '/') {
		return null;
	}

	return <div aria-hidden className="m-6 h-navigation" />;
}
