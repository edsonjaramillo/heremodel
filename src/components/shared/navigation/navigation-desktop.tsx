import { Link } from '@tanstack/react-router';
import { links } from '../../../data/navigation';
import { Logo } from '../logo';
import { NavigationCallToAction } from './navigation-cta';

export function NavigationDesktop() {
	return (
		<nav className="fixed top-6 left-1/2 z-modal mx-auto hidden h-navigation w-responsive -translate-x-1/2 transform rounded-nav bg-black px-8 md:block">
			<div className="flex h-full items-center justify-between">
				<Logo />
				<div className="flex h-full items-center gap-6">
					{links.map((link) => (
						<Link className="text-white" key={link.href} to={link.href}>
							{link.name}
						</Link>
					))}
				</div>
				<NavigationCallToAction />
			</div>
		</nav>
	);
}
