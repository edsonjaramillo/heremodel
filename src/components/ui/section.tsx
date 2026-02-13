import { cn } from '../../lib/cn';

type SectionProps = React.ComponentProps<'section'> & {
	title: string;
	description?: string;
	contentClassName?: string;
	headerClassName?: string;
};

export function Section({
	title,
	description,
	children,
	className,
	contentClassName,
	headerClassName,
	...props
}: SectionProps) {
	return (
		<section className={cn('bg-white py-20 sm:py-24 lg:py-32', className)} {...props}>
			<div className={cn('mx-auto w-responsive', contentClassName)}>
				<div className={cn('mx-auto max-w-3xl text-center', headerClassName)}>
					<h2 className="font-serif text-gray-900 text-4xl tracking-tight sm:text-5xl">{title}</h2>
					{description
						? (
								<p className="text-gray-500 mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base">
									{description}
								</p>
							)
						: null}
				</div>
				{children}
			</div>
		</section>
	);
}
