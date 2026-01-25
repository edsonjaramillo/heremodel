import { Responsive } from '../ui/responsive';
import { Logo } from './logo';

export function NavigationMobile() {
	return (
		<nav className="block h-navigation px-4 md:hidden">
			<Responsive className="flex h-full items-center justify-between">
				<Logo />
			</Responsive>
		</nav>
	);
}
