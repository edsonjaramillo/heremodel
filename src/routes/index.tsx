import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { HeroCallToAction } from '../components/shared/hero-call-to-action';
import { ServicesSection } from '../components/shared/services-section';
import { useHomepageNav } from '../context/homepage-nav-context';

export const Route = createFileRoute('/')({ component: App });

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
		</>
	);
}
