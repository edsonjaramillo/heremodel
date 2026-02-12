import { Link } from '@tanstack/react-router';
import { links } from '../../../data/navigation';
import { Logo } from '../logo';
import { NavigationCallToAction } from './navigation-cta';

export function NavigationDesktop() {
	return (
		<nav className="fixed inset-x-0 top-0 z-modal hidden border-b border-gray/30 bg-white/95 text-black shadow-base backdrop-blur-base md:block">
			<div className="mx-auto flex h-navigation w-responsive items-center justify-between px-6">
				<Logo />
				<DesktopLinks />
				<NavigationCallToAction />
			</div>
		</nav>
	);
}

function DesktopLinks() {
	return (
		<div className="flex h-full items-center gap-8">
			{links.map((link) => (
				<Link
					className="text-sm font-medium tracking-[0.14em] uppercase transition-colors duration-base"
					key={link.href}
					to={link.href}>
					{link.name}
				</Link>
			))}
		</div>
	);
}
