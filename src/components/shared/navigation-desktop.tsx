import { Link } from '@tanstack/react-router';
import { links } from '../../data/navigation';
import { Responsive } from '../ui/responsive';
import { Logo } from './logo';

export function NavigationDesktop() {
	return (
		<nav className="hidden h-navigation px-4 md:block">
			<Responsive className="flex h-full items-center justify-between">
				<Logo />
				<div className="flex h-full items-center gap-6">
					{links.map((link) => (
						<Link key={link.href} to={link.href}>
							{link.name}
						</Link>
					))}
				</div>
			</Responsive>
		</nav>
	);
}
