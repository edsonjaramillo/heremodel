export interface ServiceCatalogEntry {
	category: 'Exteriors' | 'Interiors' | 'New Construction';
	subservices: readonly string[];
	description: string;
	image: string;
	imageAlt: string;
	accentClassName: string;
	icon: 'exteriors' | 'interiors' | 'new-construction';
}

export const serviceCatalog = [
	{
		category: 'Exteriors',
		description:
			'Weather-ready upgrades and structural improvements for curb appeal and durability.',
		image: 'https://picsum.photos/id/1043/1200/900',
		imageAlt: 'Exterior home renovation with updated roof and siding',
		accentClassName: 'from-warning/25 to-warning/5 border-warning/35 bg-warning/8 text-warning',
		icon: 'exteriors',
		subservices: [
			'Roofing',
			'Siding',
			'Windows & Doors',
			'Concrete & Masonry',
			'Decks & Patios',
			'Home Additions',
		],
	},
	{
		category: 'New Construction',
		description: 'Ground-up residential builds from planning through completion.',
		image: 'https://picsum.photos/id/203/1200/900',
		imageAlt: 'New home construction framing on a prepared site',
		accentClassName: 'from-success/25 to-success/5 border-success/35 bg-success/8 text-success',
		icon: 'new-construction',
		subservices: ['Custom Homes', 'Site Prep & Development', 'Design Consultations & Assistance'],
	},
	{
		category: 'Interiors',
		description: 'Functional and finish-focused interior renovations designed for everyday living.',
		image: 'https://picsum.photos/id/222/1200/900',
		imageAlt: 'Interior remodeling with modern kitchen and living area',
		accentClassName: 'from-info/25 to-info/5 border-info/35 bg-info/8 text-info',
		icon: 'interiors',
		subservices: [
			'Bathroom & Kitchen Remodeling',
			'Drywall, Painting, & Flooring',
			'Foundation & Structural Repairs',
		],
	},
] as const satisfies readonly ServiceCatalogEntry[];

export const allSubserviceOptions = serviceCatalog.flatMap(
	(serviceGroup) => serviceGroup.subservices
) as [string, ...string[]];
