import { cn } from '../../../lib/cn';
import { buttonVariants } from '../../ui/button';

type NavigationCallToActionProps = React.ComponentProps<'a'> & {
	buttonWidth?: 'fit' | 'full';
	inverted?: boolean;
};

export function NavigationCallToAction({
	buttonWidth,
	className,
	inverted = false,
}: NavigationCallToActionProps) {
	const buttonStyle = cn(
		buttonVariants({ width: buttonWidth, color: inverted ? 'inverted' : 'black' }),
		className
	);
	return (
		<a href="tel:2561231234" className={buttonStyle}>
			Call Us
		</a>
	);
}
