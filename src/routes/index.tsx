import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { AboutSection } from '../components/shared/about-section';
import { HeroCallToAction } from '../components/shared/hero-call-to-action';
import { ServicesSection } from '../components/shared/services-section';
import { useHomepageNav } from '../context/homepage-nav-context';

export const Route = createFileRoute('/')({
	component: App,
	head: () => ({
		meta: [
			{ title: 'Home | Hometown Exterior & Remodel' },
			{
				name: 'description',
				content:
					'Exterior remodeling services in North Alabama with dependable timelines, quality craftsmanship, and personalized project guidance.',
			},
		],
	}),
});

function App() {
	const heroRef = useRef<HTMLElement>(null);
	const { setPastHero, reset } = useHomepageNav();

	useEffect(() => {
		const heroElement = heroRef.current;
		if (!heroElement) {
			return;
		}

		setPastHero(false);

		const observer = new IntersectionObserver(
			([entry]) => {
				setPastHero(!entry.isIntersecting);
			},
			{ threshold: 0, rootMargin: '-56px 0px 0px 0px' }
		);

		observer.observe(heroElement);

		return () => {
			observer.disconnect();
			reset();
		};
	}, [reset, setPastHero]);

	return (
		<>
			<HeroCallToAction heroRef={heroRef} />
			<ServicesSection />
			<AboutSection />
		</>
	);
}
