import { Link, useLocation } from '@tanstack/react-router';
import { useHomepageNav } from '../../../context/homepage-nav-context';
import { useMobileMenu } from '../../../context/mobile-menu-context';
import { links } from '../../../data/navigation';
import { cn } from '../../../lib/cn';
import { textVariants } from '../../ui/text';
import { Logo } from '../logo';
import { NavigationCallToAction } from './navigation-cta';

// Height constants
const NAV_HEIGHT = 3.5;
const LINK_HEIGHT = 2.5;
const CTA_HEIGHT = 2.25 + 0.5;

// 0.5 (p-2) * 2
const MOBILE_MENU_PADDING = 1;

export function NavigationMobile() {
	const { isOpen } = useMobileMenu();
	const { pathname } = useLocation();
	const { isPastHero } = useHomepageNav();
	const isHomepageTop = pathname === '/' && !isPastHero && !isOpen;

	const OPEN_HEIGHT = NAV_HEIGHT + MOBILE_MENU_PADDING + CTA_HEIGHT + links.length * LINK_HEIGHT;
	const MENU_HEIGHT = isOpen ? `${OPEN_HEIGHT}rem` : `${NAV_HEIGHT}rem`;

	const cls = cn(
		isOpen ? '' : 'h-navigation',
		'fixed top-0 left-1/2 z-modal mx-auto block w-full -translate-x-1/2 transform overflow-hidden transition-all duration-base md:hidden',
		isHomepageTop ? 'bg-transparent text-white shadow-none' : 'bg-white text-black shadow-base'
	);

	return (
		<nav className={cls} style={{ height: MENU_HEIGHT }}>
			<div className="relative flex h-navigation items-center justify-between px-8">
				<Logo className={cn(isHomepageTop && 'text-white')} />
				<Hamburger light={isHomepageTop} />
			</div>
			<MobileMenu />
		</nav>
	);
}

function MobileMenu() {
	const { isOpen } = useMobileMenu();
	const { pathname } = useLocation();
	const { isPastHero } = useHomepageNav();
	const isHomepageTop = pathname === '/' && !isPastHero;
	const menuStyle = cn('h-0 duration-base transition-all py-0 px-4', isOpen && 'py-2');
	const linkStyle = textVariants({ textColor: isHomepageTop ? 'white' : 'black' });

	return (
		<div className={menuStyle}>
			<NavigationCallToAction
				buttonWidth="full"
				className="mb-2"
				inverted={isHomepageTop && !isOpen}
			/>
			{links.map((link) => {
				const classes = cn(
					linkStyle,
					'block px-4 py-2 font-medium transition-colors duration-base',
					isOpen
						? 'bg-white text-black hover:bg-gray hover:text-black'
						: 'bg-transparent text-white hover:bg-white/15 hover:text-white'
				);

				if (link.href.startsWith('#')) {
					const anchorHref = pathname === '/' ? link.href : `/${link.href}`;
					return (
						<a key={link.href} href={anchorHref} className={classes}>
							{link.name}
						</a>
					);
				}

				return (
					<Link to={link.href} key={link.href} className={classes}>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}

interface HamburgerProps {
	light: boolean;
}

function Hamburger({ light }: HamburgerProps) {
	const { toggle, isOpen } = useMobileMenu();
	const lineColor = light ? 'bg-white' : 'bg-black';

	return (
		<button
			type="button"
			onClick={toggle}
			className="relative flex size-7 cursor-pointer flex-col justify-between">
			<span className="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
			<div
				className={cn(
					'absolute top-1 h-0.5 w-7 origin-center transition-all duration-base',
					lineColor,
					isOpen ? 'translate-y-[9px] -rotate-45' : 'rotate-0'
				)}
			/>
			<div
				className={cn(
					'absolute top-1/2 h-0.5 w-7 -translate-y-1/2 transition-all duration-base',
					lineColor,
					isOpen ? 'opacity-0' : 'opacity-100'
				)}
			/>
			<div
				className={cn(
					'absolute bottom-1 h-0.5 w-7 origin-center transition-all duration-base',
					lineColor,
					isOpen ? '-translate-y-[9px] rotate-45' : 'rotate-0'
				)}
			/>
		</button>
	);
}
