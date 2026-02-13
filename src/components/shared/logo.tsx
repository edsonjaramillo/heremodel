import { Link } from '@tanstack/react-router';
import { cn } from '../../lib/cn';

type LogoProps = React.ComponentProps<'a'>;

export function Logo({ className }: LogoProps) {
	return (
		<Link to="/" className={cn('max-w-12', className)}>
			Logo
		</Link>
	);
}
