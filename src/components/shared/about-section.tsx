import { Section } from '../ui/section';
import { Paragraph, Span } from '../ui/text';

const aboutParagraphs = [
	'Founded by three lifelong best friends born and raised in Guntersville, Alabama, our construction company is built on trust, craftsmanship, and a deep love for our hometown. What started as years of friendship and shared hard work has grown into a full-service construction business proudly serving Guntersville and the surrounding communities',
	'We specialize in full interior and exterior remodels, as well as custom new-construction homes. From kitchen and bath renovations to complete home transformations and ground-up builds, we bring quality workmanship, clear communication, and attention to detail to every project. As locals, we understand the value of doing things right, standing behind our work, and treating every home like it’s our own.',
	'Our mission is simple: build lasting relationships while delivering dependable, high-quality construction that homeowners can trust.',
];

export function AboutSection() {
	return (
		<Section
			id="about"
			className="scroll-mt-28 bg-gray/20"
			title="About Us"
			description="A focused team building durable, thoughtful exterior spaces with design-first execution.">
			<div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.6fr] md:items-start md:gap-12">
				<div className="rounded-2xl border border-black bg-white/10 p-6 shadow-base">
					<Span className="text-xs font-semibold tracking-[0.2em] text-black uppercase" size="xs">
						Who We Are
					</Span>
					<Paragraph className="mt-4 text-sm leading-6 text-black" size="sm">
						A design-led remodeling team focused on residential exteriors, landscaping, and outdoor
						living environments.
					</Paragraph>
				</div>
				<div className="space-y-6">
					{aboutParagraphs.map((paragraph) => (
						<Paragraph key={paragraph} className="text-base leading-8 text-black">
							{paragraph}
						</Paragraph>
					))}
				</div>
			</div>
		</Section>
	);
}
