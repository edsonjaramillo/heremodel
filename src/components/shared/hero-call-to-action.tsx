import type { RefObject } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '../../lib/cn';
import { buttonVariants } from '../ui/button';

const heroImage = 'https://picsum.photos/seed/home-cta-1/1920/1080';

interface HeroCallToActionProps {
	heroRef: RefObject<HTMLElement | null>;
}

export function HeroCallToAction({ heroRef }: HeroCallToActionProps) {
	return (
		<section ref={heroRef} className="relative min-h-svh overflow-hidden">
			<img
				alt="Exterior home remodel background"
				src={heroImage}
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-black/55" />
			<div className="relative mx-auto flex min-h-svh w-responsive items-center justify-center px-4 py-16">
				<div className="max-w-3xl text-center">
					<p className="text-sm tracking-[0.24em] text-white/85 uppercase">
						Hometown Exterior & Remodel
					</p>
					<h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
						Upgrade Your Home With Craftsmanship That Lasts
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
						Plan your next exterior project with a team that brings design guidance, dependable
						timelines, and high-quality installation from day one.
					</p>
					<div className="mt-10 flex items-center justify-center">
						<Link to="/quote" className={cn(buttonVariants({ color: 'hero' }))}>
							Get a Quote
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
