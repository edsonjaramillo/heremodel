import { cn } from '../../../lib/cn';
import { buttonVariants } from '../../ui/button';

type NavigationCallToActionProps = React.ComponentProps<'a'> & {
	buttonWidth?: 'fit' | 'full';
};

export function NavigationCallToAction({ buttonWidth, className }: NavigationCallToActionProps) {
	const buttonStyle = cn(buttonVariants({ width: buttonWidth }), className);
	return (
		<a href="tel:2561231234" className={buttonStyle}>
			Call Us
		</a>
	);
}
