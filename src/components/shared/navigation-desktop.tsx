import { Link } from '@tanstack/react-router';
import { links } from '../../data/navigation';

export function NavigationDesktop() {
	return (
		<nav className="hidden bg-red-500 md:block">
			<div className="flex gap-2">
				{links.map((link) => {
					return (
						<Link key={link.href} to={link.href}>
							{link.name}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
