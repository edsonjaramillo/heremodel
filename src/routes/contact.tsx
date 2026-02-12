import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { createFileRoute } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Form } from '../components/ui/form';
import { Input, InputGroup } from '../components/ui/input';
import { Responsive } from '../components/ui/responsive';
import { Label } from '../components/ui/text';

const contactFormSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters long'),
});

export const Route = createFileRoute('/contact')({
	component: RouteComponent,
});

function RouteComponent() {
	const form = useForm({ resolver: standardSchemaResolver(contactFormSchema) });

	return (
		<Responsive>
			<FormProvider {...form}>
				<Form className="p-8 shadow-base">
					<InputGroup>
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="Name" type="text" autoComplete="name" field="name" />
					</InputGroup>
					<Button type="submit" disabled={form.formState.isSubmitting}>
						{form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
					</Button>
				</Form>
			</FormProvider>
		</Responsive>
	);
}
