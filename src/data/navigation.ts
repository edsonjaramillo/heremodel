export interface NavigationLink {
	name: string;
	href: string;
}

export const links: NavigationLink[] = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
];
