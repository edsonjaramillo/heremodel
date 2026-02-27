import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { Toaster } from 'sonner';
import { Footer } from '../components/shared/footer';
import { NavigationDesktop } from '../components/shared/navigation/navigation-desktop';
import { NavigationMobile } from '../components/shared/navigation/navigation-mobile';
import { NavigationSpacer } from '../components/shared/navigation/navigation-spacer';
import appCss from '../styles.css?url';

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ title: 'Hometown Exterior & Remodel' },
		],
		links: [{ rel: 'stylesheet', href: appCss }],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
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
				<TanStackDevtools
					config={{ position: 'bottom-right' }}
					plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
				/>
				<Toaster
					position="top-right"
					toastOptions={{
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
					}}
				/>
				<Footer />
				<Scripts />
			</body>
		</html>
	);
}
