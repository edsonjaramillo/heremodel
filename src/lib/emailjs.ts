const EMAILJS_API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

export interface QuoteEmailParams {
	name: string;
	email: string;
	phone: string;
	propertyType: 'residential' | 'commercial';
	services: string[];
}

export interface EmailJsConfig {
	serviceId: string;
	templateId: string;
	publicKey: string;
}

interface ResolvedEmailJsConfig {
	serviceId: string;
	templateId: string;
	publicKey: string;
}

export class EmailJsClient {
	private readonly config: ResolvedEmailJsConfig;

	constructor(config: Partial<EmailJsConfig> = {}) {
		const serviceId = config.serviceId || import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = config.templateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = config.publicKey || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		if (!serviceId) {
			throw new Error('Missing EmailJS configuration: VITE_EMAILJS_SERVICE_ID');
		}
		if (!templateId) {
			throw new Error('Missing EmailJS configuration: VITE_EMAILJS_TEMPLATE_ID');
		}
		if (!publicKey) {
			throw new Error('Missing EmailJS configuration: VITE_EMAILJS_PUBLIC_KEY');
		}

		this.config = { serviceId, templateId, publicKey };
	}

	async sendQuote(params: QuoteEmailParams): Promise<void> {
		const response = await fetch(EMAILJS_API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				service_id: this.config.serviceId,
				template_id: this.config.templateId,
				user_id: this.config.publicKey,
				template_params: {
					name: params.name,
					email: params.email,
					phone: params.phone,
					propertyType: params.propertyType,
					services: params.services.join(', '),
				},
			}),
		});

		if (!response.ok) {
			const responseText = await response.text().catch(() => '');
			throw new Error(
				`EmailJS request failed (${response.status}): ${responseText || 'Unknown error'}`
			);
		}
	}
}
