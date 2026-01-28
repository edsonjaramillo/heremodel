import { Responsive } from '../ui/responsive';
import { Span } from '../ui/text';
import { Logo } from './logo';

interface FooterIconProps {
	to: string;
	children: React.ReactNode;
}

function FooterIcon({ to, children }: FooterIconProps) {
	return (
		<a
			href={to}
			rel="noopener nofollow noreferrer external"
			target="_blank"
			className="size-6 fill-muted transition-colors duration-base hover:fill-white">
			{children}
		</a>
	);
}

function FacebookIcon() {
	return (
		<FooterIcon to="https://www.facebook.com">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 50 50">
				<path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
			</svg>
		</FooterIcon>
	);
}

interface FooterSectionProps {
	title: string;
	children?: React.ReactNode;
}

function FooterSection({ title, children }: FooterSectionProps) {
	return (
		<div className="flex flex-col">
			<Span textColor="white" size="lg" className="font-bold">
				{title}
			</Span>
			<ul className="mt-3 flex flex-col">
				<Span textColor="muted">Hello</Span>
				<Span textColor="muted">Hello</Span>
				<Span textColor="muted">Hello</Span>
				<Span textColor="muted">Hello</Span>
				<Span textColor="muted">Hello</Span>
				{children}
			</ul>
		</div>
	);
}

export function Footer() {
	const copyrightText = `©${new Date().getFullYear()} Hometown Exterior & Remodel, All rights reserved.`;
	return (
		<footer className="flex flex-col bg-black py-12">
			<Responsive>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col gap-4">
						<Logo />
						<Span size="sm" textColor="muted" className="max-w-64 text-pretty">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, architecto.
						</Span>
					</div>
					<FooterSection title="About Us" />
					<FooterSection title="About Us" />
					<FooterSection title="About Us" />
				</div>
				<div className="flex flex-col pt-0">
					<hr className="mt-10 text-muted" />
					<div className="flex items-end justify-between">
						<Span size="sm" textColor="muted" className="pt-10">
							{copyrightText}
						</Span>
						<div className="flex gap-4">
							<FacebookIcon />
						</div>
					</div>
				</div>
			</Responsive>
		</footer>
	);
}
