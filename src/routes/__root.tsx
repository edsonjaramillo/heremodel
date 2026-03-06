import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { Toaster } from 'sonner';
import { Footer } from '../components/shared/footer';
import { NavigationDesktop } from '../components/shared/navigation/navigation-desktop';
import { NavigationMobile } from '../components/shared/navigation/navigation-mobile';
import { NavigationSpacer } from '../components/shared/navigation/navigation-spacer';
import appCss from '../styles.css?url';

const isDevelopment = import.meta.env.DEV;
const toasterOptions = {
	style: {
		background: 'var(--color-white)',
		borderColor: 'var(--color-muted)',
		color: 'var(--color-black)',
	},
	classNames: {
		success:
			'!border-[var(--color-success)] !bg-[var(--color-success-accent)] !text-[var(--success-700)]',
		error:
			'!border-[var(--color-danger)] !bg-[var(--color-danger-accent)] !text-[var(--danger-700)]',
	},
} as const;

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'theme-color', content: '#f3f4f6' },
			{ title: 'Hometown Exterior & Remodel' },
			{
				name: 'description',
				content:
					'Hometown Exterior & Remodel provides exterior and interior remodeling services with craftsmanship-focused installation across North Alabama.',
			},
			{ property: 'og:type', content: 'website' },
			{ property: 'og:site_name', content: 'Hometown Exterior & Remodel' },
			{ property: 'og:image', content: '/HERMODELOG.webp' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:image', content: '/HERMODELOG.webp' },
		],
		links: [
			{ rel: 'stylesheet', href: appCss },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	let devtools: React.ReactNode = null;

	if (isDevelopment) {
		devtools = (
			<TanStackDevtools
				config={{ position: 'bottom-right' }}
				plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
			/>
		);
	}

	return (
		<html lang="en" className="smooth-scroll">
			<head>
				<HeadContent />
			</head>
			<body className="relative bg-white">
				<NavigationMobile />
				<NavigationDesktop />
				<NavigationSpacer />
				<main>{children}</main>
				{devtools}
				<Toaster position="top-right" toastOptions={toasterOptions} />
				<Footer />
				<Scripts />
			</body>
		</html>
	);
}
