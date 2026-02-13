import { Link, useLocation } from '@tanstack/react-router';
import { useHomepageNav } from '../../../context/homepage-nav-context';
import { links } from '../../../data/navigation';
import { cn } from '../../../lib/cn';
import { Logo } from '../logo';
import { NavigationCallToAction } from './navigation-cta';

export function NavigationDesktop() {
	const { pathname } = useLocation();
	const { isPastHero } = useHomepageNav();
	const isHomepageTop = pathname === '/' && !isPastHero;

	return (
		<nav
			className={cn(
				'fixed inset-x-0 top-0 z-modal hidden md:block',
				isHomepageTop
					? 'border-b border-transparent bg-transparent text-white'
					: 'border-b border-gray/30 bg-white/95 text-black shadow-base backdrop-blur-base'
			)}>
			<div className="mx-auto flex h-navigation w-responsive items-center justify-between px-6">
				<Logo className={cn(isHomepageTop && 'text-white')} />
				<DesktopLinks />
				<NavigationCallToAction inverted={isHomepageTop} className="transition-none" />
			</div>
		</nav>
	);
}

function DesktopLinks() {
	const { pathname } = useLocation();

	return (
		<div className="flex h-full items-center gap-8">
			{links.map((link) => {
				if (link.href.startsWith('#')) {
					const anchorHref = pathname === '/' ? link.href : `/${link.href}`;
					return (
						<a
							className="text-sm font-medium tracking-[0.14em] uppercase"
							key={link.href}
							href={anchorHref}>
							{link.name}
						</a>
					);
				}

				return (
					<Link
						className="text-sm font-medium tracking-[0.14em] uppercase"
						key={link.href}
						to={link.href}>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}
