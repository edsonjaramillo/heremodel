import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { createFileRoute } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Form } from '../components/ui/form';
import {
	CheckboxGroup,
	CheckboxOption,
	Input,
	InputError,
	InputGroup,
	RadioGroup,
	RadioOption,
} from '../components/ui/input';
import { Responsive } from '../components/ui/responsive';
import { H1, Label, Paragraph } from '../components/ui/text';
import { allSubserviceOptions, serviceCatalog } from '../data/services';
import { EmailJsClient } from '../lib/emailjs';

const serviceOptions = allSubserviceOptions;

function toCheckboxId(value: string) {
	return `service-${value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')}`;
}

const quoteFormSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters long'),
	email: z.email('Please enter a valid email address'),
	phone: z.string().min(10, 'Phone number must be at least 10 digits'),
	propertyType: z.enum(['residential', 'commercial'], {
		error: 'Please choose residential or commercial',
	}),
	services: z.array(z.enum(serviceOptions)).min(1, 'Please choose at least one service'),
});

export const Route = createFileRoute('/quote')({
	component: RouteComponent,
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;
const emailJsClient = new EmailJsClient();

function RouteComponent() {
	const form = useForm<QuoteFormData>({
		resolver: standardSchemaResolver(quoteFormSchema),
	});
	const onSubmit = form.handleSubmit(
		async (values) => {
			await emailJsClient
				.sendQuote(values)
				.then(() => {
					toast.success('Your quote request was sent successfully. We will contact you soon.');
				})
				.catch(() => {
					toast.error('Error sending quote request:');
				});
		},
		() => {
			toast.error('Please fix the errors in the form before submitting.');
		}
	);

	return (
		<div
			aria-hidden="true"
			className="bg-cover bg-center py-16"
			style={{ backgroundImage: 'url("https://picsum.photos/id/188/1600/1200?grayscale")' }}>
			<Responsive>
				<FormProvider {...form}>
					<Form className="mx-auto space-y-5 bg-white/95 p-6" onSubmit={onSubmit}>
						<div>
							<H1 size="3xl" className="text-black">
								Request a Quote
							</H1>
							<Paragraph className="mt-2 text-pretty text-gray">
								Tell us about your project and our team will follow up with next steps.
							</Paragraph>
						</div>
						<InputGroup>
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Name" type="text" autoComplete="name" field="name" />
							<InputError field="name" />
						</InputGroup>
						<InputGroup>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								placeholder="name@example.com"
								type="email"
								autoComplete="email"
								field="email"
							/>
							<InputError field="email" />
						</InputGroup>
						<InputGroup>
							<Label htmlFor="phone">Phone Number</Label>
							<Input
								id="phone"
								placeholder="(555) 555-5555"
								type="tel"
								autoComplete="tel"
								field="phone"
							/>
							<InputError field="phone" />
						</InputGroup>
						<InputGroup className="w-56">
							<Label>Property Type</Label>
							<RadioGroup>
								<RadioOption
									field="propertyType"
									id="residential"
									label="Residential"
									value="residential"
									className="border-none shadow-none"
								/>
								<RadioOption
									field="propertyType"
									id="commercial"
									label="Commercial"
									value="commercial"
									className="border-none shadow-none"
								/>
							</RadioGroup>
							<InputError field="propertyType" />
						</InputGroup>
						<InputGroup>
							<Label>Services</Label>
							<div className="space-y-5">
								{serviceCatalog.map((group) => (
									<div key={group.category} className="space-y-2">
										<Paragraph className="text-xs font-semibold tracking-[0.18em] uppercase">
											{group.category}
										</Paragraph>
										<CheckboxGroup>
											{group.subservices.map((service) => (
												<CheckboxOption
													key={service}
													field="services"
													className="border-none shadow-none"
													id={toCheckboxId(service)}
													label={service}
													value={service}
												/>
											))}
										</CheckboxGroup>
									</div>
								))}
							</div>
							<InputError field="services" />
						</InputGroup>
						<Button type="submit" disabled={form.formState.isSubmitting} width="full" color="black">
							{form.formState.isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
						</Button>
					</Form>
				</FormProvider>
			</Responsive>
		</div>
	);
}
