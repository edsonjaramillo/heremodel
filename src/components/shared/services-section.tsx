import { serviceCatalog } from '../../data/services';
import { cn } from '../../lib/cn';
import { Section } from '../ui/section';

export function ServicesSection() {
	return (
		<Section
			id="services"
			className="scroll-margin-top:calc(var(--navigation-height+1rem))"
			title="Our Services"
			description="Explore our full-service construction offerings across exterior work, interior remodeling, and new home builds.">
			<div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
				{serviceCatalog.map((service, index) => (
					<ServiceCard
						key={service.category}
						service={service}
						className={index % 2 !== 0 ? 'lg:translate-y-4' : undefined}
					/>
				))}
			</div>
		</Section>
	);
}

interface ServiceCardProps {
	service: (typeof serviceCatalog)[number];
	className?: string;
}

function ServiceCard({ service, className }: ServiceCardProps) {
	return (
		<article
			className={cn(
				'group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-base transition-all duration-300 hover:-translate-y-1 hover:shadow-glow',
				className
			)}>
			<div className="relative overflow-hidden">
				<img
					src={service.image}
					alt={service.imageAlt}
					loading="lazy"
					className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
				/>
				<div className={cn('absolute inset-0 bg-linear-to-tr', service.accentClassName)} />
				<div className="absolute bottom-4 left-4">
					<span
						className={cn(
							'backdrop-blur-xs inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase',
							service.accentClassName
						)}>
						<CategoryIcon icon={service.icon} />
						{service.category}
					</span>
				</div>
			</div>
			<div className="p-6 sm:p-7">
				<div className="flex items-center justify-between gap-3">
					<h3 className="text-gray-900 text-xl font-semibold tracking-tight">{service.category}</h3>
					<span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium tracking-wide uppercase">
						{service.subservices.length}
						{' Services'}
					</span>
				</div>
				<p className="mt-3 text-sm leading-6 text-gray">{service.description}</p>
				<ul className="mt-5 space-y-2">
					{service.subservices.map((subservice) => (
						<li key={subservice} className="text-sm leading-6 text-black sm:text-base">
							{subservice}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}

interface CategoryIconProps {
	icon: (typeof serviceCatalog)[number]['icon'];
}

function CategoryIcon({ icon }: CategoryIconProps) {
	const iconStyle = cn('h-3.5 w-3.5 shrink-0');

	if (icon === 'exteriors') {
		return (
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				fill="none"
				className={iconStyle}
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M3 11.5 12 4l9 7.5" />
				<path d="M5.5 10.5V20h13V10.5" />
				<path d="M9.5 20v-5.5h5V20" />
			</svg>
		);
	}

	if (icon === 'interiors') {
		return (
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				fill="none"
				className={iconStyle}
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<rect x="4" y="5" width="16" height="14" rx="2" />
				<path d="M12 5v14" />
				<path d="M4 12h8" />
			</svg>
		);
	}

	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			fill="none"
			className={iconStyle}
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M4 19h16" />
			<path d="M6 19V8.5L12 5l6 3.5V19" />
			<path d="M9 11h6" />
		</svg>
	);
}
