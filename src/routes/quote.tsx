import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { createFileRoute } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
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

const serviceOptions = [
	'Exterior Remodeling',
	'Landscaping & Hardscaping',
	'Custom Design',
	'Outdoor Living',
] as const;

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

function RouteComponent() {
	const form = useForm({
		resolver: standardSchemaResolver(quoteFormSchema),
		defaultValues: { name: '', email: '', phone: '', propertyType: undefined, services: [] },
	});
	const onSubmit = form.handleSubmit(async () => {});

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
							<CheckboxGroup>
								{serviceOptions.map((service) => (
									<CheckboxOption
										key={service}
										field="services"
										className="border-none shadow-none"
										id={service}
										label={service}
										value={service}
									/>
								))}
							</CheckboxGroup>
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
