import { Link } from '@tanstack/react-router';
import { links } from '../../data/navigation';
import { Responsive } from '../ui/responsive';

export function NavigationMobile() {
	return (
		<nav className="bg-blue-500 block md:hidden">
			<Responsive>
				<div className="flex gap-2">
					{links.map((link) => {
						return (
							<Link key={link.href} to={link.href}>
								{link.name}
							</Link>
						);
					})}
				</div>
			</Responsive>
		</nav>
	);
}
