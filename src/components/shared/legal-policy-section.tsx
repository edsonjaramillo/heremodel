import { H2, Paragraph } from '../ui/text';

interface LegalPolicySectionProps {
	title: string;
	paragraphs: string[];
}

export function LegalPolicySection({ title, paragraphs }: LegalPolicySectionProps) {
	return (
		<section className="space-y-3">
			<H2 size="xl" className="text-black">
				{title}
			</H2>
			<div className="space-y-2">
				{paragraphs.map((paragraph) => (
					<Paragraph key={paragraph} className="text-gray">
						{paragraph}
					</Paragraph>
				))}
			</div>
		</section>
	);
}
