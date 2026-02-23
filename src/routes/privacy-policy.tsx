import { createFileRoute } from '@tanstack/react-router';
import { LegalPolicySection } from '../components/shared/legal-policy-section';
import { Responsive } from '../components/ui/responsive';
import { H1, Paragraph, Span } from '../components/ui/text';
import { legalConfig, privacyPolicySections } from '../data/legal-content';

export const Route = createFileRoute('/privacy-policy')({
	component: RouteComponent,
});

function RouteComponent() {
	const effectiveDateText = `Effective date: ${legalConfig.effectiveDate} | Last updated: ${legalConfig.lastUpdatedDate}`;
	const introText = `${legalConfig.companyName} is committed to protecting your personal information and using it responsibly when you visit ${legalConfig.websiteUrl} or request our services.`;

	return (
		<section className="bg-gray/10 py-16">
			<Responsive>
				<div className="rounded-md mx-auto max-w-4xl space-y-10 bg-white p-8 shadow-base">
					<div className="space-y-3">
						<H1 size="3xl" className="text-black">
							Privacy Policy
						</H1>
						<Span size="sm" textColor="gray" className="block">
							{effectiveDateText}
						</Span>
						<Paragraph className="text-gray">{introText}</Paragraph>
					</div>
					{privacyPolicySections.map((section) => (
						<LegalPolicySection
							key={section.title}
							title={section.title}
							paragraphs={section.paragraphs}
						/>
					))}
				</div>
			</Responsive>
		</section>
	);
}
