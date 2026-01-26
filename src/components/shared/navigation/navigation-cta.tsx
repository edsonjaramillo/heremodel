import { buttonVariants } from '../../ui/button';

export function NavigationCallToAction() {
	const buttonStyle = buttonVariants();
	return (
		<a href="tel:2561231234" className={buttonStyle}>
			Call Us
		</a>
	);
}
