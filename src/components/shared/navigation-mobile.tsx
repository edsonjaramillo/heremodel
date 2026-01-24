import { Link } from '@tanstack/react-router';
import { links } from '../../data/navigation';

export function NavigationMobile() {
	return (
		<nav className="block md:hidden bg-blue-500">
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
