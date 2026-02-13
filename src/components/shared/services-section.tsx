import { cn } from '../../lib/cn';
import { Section } from '../ui/section';

interface Service {
	title: string;
	description: string;
	image: string;
	alt: string;
}

const services = [
	{
		title: 'Exterior Remodeling',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat arcu quis erat sodales, sed posuere urna porttitor.',
		image: 'https://picsum.photos/seed/service-exterior/900/1200',
		alt: 'Exterior remodeling project',
	},
	{
		title: 'Landscaping & Hardscaping',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum, justo et bibendum tincidunt, turpis elit varius erat.',
		image: 'https://picsum.photos/seed/service-landscape/900/1200',
		alt: 'Landscaping and hardscaping project',
	},
	{
		title: 'Custom Design',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate dictum sem, et consequat justo cursus sed.',
		image: 'https://picsum.photos/seed/service-custom/900/1200',
		alt: 'Custom design project',
	},
	{
		title: 'Outdoor Living',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis magna non felis vulputate, in malesuada arcu aliquet.',
		image: 'https://picsum.photos/seed/service-outdoor/900/1200',
		alt: 'Outdoor living project',
	},
];

export function ServicesSection() {
	return (
		<Section
			id="services"
			className="scroll-margin-top:calc(var(--navigation-height+1rem))"
			title="Our Services"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, nibh eu lobortis pharetra, erat est mollis tortor.">
			<div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:gap-x-18">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						service={service}
						className={index % 2 !== 0 ? 'md:translate-y-16 lg:translate-y-20' : undefined}
					/>
				))}
			</div>
		</Section>
	);
}

interface ServiceCardProps {
	service: Service;
	className?: string;
}

function ServiceCard({ service, className }: ServiceCardProps) {
	return (
		<article className={cn(className)}>
			<img
				src={service.image}
				alt={service.alt}
				className="h-84 w-full object-cover shadow-base sm:h-96 lg:h-104"
				loading="lazy"
			/>
			<div className="mt-5">
				<h3 className="text-gray-900 text-lg font-semibold tracking-tight sm:text-xl">
					{service.title}
				</h3>
				<p className="text-gray-500 mt-3 text-sm leading-6 sm:text-base">{service.description}</p>
			</div>
		</article>
	);
}
