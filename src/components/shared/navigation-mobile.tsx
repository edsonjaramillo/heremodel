import { Logo } from './logo';
import { NavigationCallToAction } from './navigation-cta';

export function NavigationMobile() {
	return (
		<nav className="fixed top-6 left-1/2 z-modal mx-auto block h-navigation w-responsive -translate-x-1/2 transform rounded-nav bg-black px-8 md:hidden">
			<div className="flex h-full items-center justify-between">
				<Logo />
				<NavigationCallToAction />
			</div>
		</nav>
	);
}
