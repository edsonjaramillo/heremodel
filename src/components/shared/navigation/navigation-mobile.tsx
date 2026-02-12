import { Link } from '@tanstack/react-router';
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

	const OPEN_HEIGHT = NAV_HEIGHT + MOBILE_MENU_PADDING + CTA_HEIGHT + links.length * LINK_HEIGHT;
	const MENU_HEIGHT = isOpen ? `${OPEN_HEIGHT}rem` : `${NAV_HEIGHT}rem`;

	const cls = cn(
		isOpen ? '' : 'h-navigation',
		'fixed overflow-hidden duration-base transition-all top-0 left-1/2 z-modal mx-auto block w-full -translate-x-1/2 transform bg-white md:hidden shadow-base'
	);

	return (
		<nav className={cls} style={{ height: MENU_HEIGHT }}>
			<div className="relative flex h-navigation items-center justify-between px-8">
				<Logo />
				<Hamburger />
			</div>
			<MobileMenu />
		</nav>
	);
}

function MobileMenu() {
	const { isOpen } = useMobileMenu();
	const menuStyle = cn('h-0 duration-base transition-all py-0 px-4', isOpen && 'py-2');
	const linkStyle = textVariants({ textColor: 'black' });
	return (
		<div className={menuStyle}>
			<NavigationCallToAction buttonWidth="full" className="mb-2" />
			{links.map((link) => (
				<Link
					to={link.href}
					key={link.href}
					className={cn(
						linkStyle,
						'block bg-white px-4 py-2 font-medium transition-colors duration-base hover:bg-gray hover:text-black'
					)}>
					{link.name}
				</Link>
			))}
		</div>
	);
}

function Hamburger() {
	const { toggle, isOpen } = useMobileMenu();

	return (
		<button
			type="button"
			onClick={toggle}
			className="relative flex size-7 cursor-pointer flex-col justify-between">
			<span className="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
			<div
				className={cn(
					'absolute top-1 h-0.5 w-7 origin-center bg-black transition-all duration-base',
					isOpen ? 'translate-y-[9px] -rotate-45' : 'rotate-0'
				)}
			/>
			<div
				className={cn(
					'absolute top-1/2 h-0.5 w-7 -translate-y-1/2 bg-black transition-all duration-base',
					isOpen ? 'opacity-0' : 'opacity-100'
				)}
			/>
			<div
				className={cn(
					'absolute bottom-1 h-0.5 w-7 origin-center bg-black transition-all duration-base',
					isOpen ? '-translate-y-[9px] rotate-45' : 'rotate-0'
				)}
			/>
		</button>
	);
}
