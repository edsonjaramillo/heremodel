export interface LegalConfig {
	companyName: string;
	websiteUrl: string;
	email: string;
	phoneNumber: string;
	effectiveDate: string;
	lastUpdatedDate: string;
	governingState: string;
	serviceArea?: string;
}

export interface LegalSection {
	title: string;
	paragraphs: string[];
}

export const legalConfig: LegalConfig = {
	companyName: 'Hometown Exterior & Remodel',
	websiteUrl: 'https://heremodel.com',
	email: 'derek@heremodel.com',
	phoneNumber: '(256) 293-6123',
	effectiveDate: 'February 23, 2026',
	lastUpdatedDate: 'February 23, 2026',
	governingState: 'Alabama',
	serviceArea: 'North Alabama',
};

export const privacyPolicySections: LegalSection[] = [
	{
		title: 'Overview',
		paragraphs: [
			`${legalConfig.companyName} ("we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us through ${legalConfig.websiteUrl} and our service interactions.`,
			`This Privacy Policy explains what we collect, how we use it, and your options regarding your information when you request remodeling services in ${legalConfig.serviceArea}.`,
		],
	},
	{
		title: 'Information We Collect',
		paragraphs: [
			'We may collect information you provide directly, including your name, email address, phone number, property address, project details, and any files or photos submitted through quote or contact forms.',
			'We may also collect technical usage data such as IP address, browser type, pages viewed, and device identifiers through analytics or website logs.',
		],
	},
	{
		title: 'How We Use Information',
		paragraphs: [
			'We use your information to respond to inquiries, prepare estimates, schedule services, communicate project updates, and provide customer support.',
			'We may also use information to improve our website, optimize service quality, and maintain records for legal, tax, and operational requirements.',
		],
	},
	{
		title: 'Information Sharing',
		paragraphs: [
			'We do not sell your personal information. We may share information with trusted vendors or subcontractors who help us operate our business, such as payment processors, scheduling tools, or project partners.',
			'We may disclose information when required by law, to protect our rights, or in connection with a business transition such as a merger, acquisition, or asset transfer.',
		],
	},
	{
		title: 'Cookies and Analytics',
		paragraphs: [
			'Our website may use cookies and similar technologies to remember preferences, understand traffic patterns, and improve your browsing experience.',
			'You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.',
		],
	},
	{
		title: 'Data Retention',
		paragraphs: [
			'We retain personal information only as long as needed for the purposes described in this policy, including providing services, resolving disputes, and complying with legal obligations.',
			'Retention periods may vary based on the type of information and applicable legal requirements.',
		],
	},
	{
		title: 'Your Rights and Choices',
		paragraphs: [
			`You may request access to, correction of, or deletion of your personal information by contacting us at ${legalConfig.email}.`,
			'Depending on your location, you may have additional rights under applicable privacy laws.',
		],
	},
	{
		title: 'Data Security',
		paragraphs: [
			'We use reasonable administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, use, or disclosure.',
			'No system is completely secure, and we cannot guarantee absolute security of data transmitted over the internet.',
		],
	},
	{
		title: 'Children and Minors',
		paragraphs: [
			'Our services are intended for adults and we do not knowingly collect personal information from children under 13.',
			'If you believe a child has submitted personal information to us, contact us so we can review and remove it as appropriate.',
		],
	},
	{
		title: 'Contact Us',
		paragraphs: [
			`For privacy-related questions or requests, contact ${legalConfig.companyName} at ${legalConfig.email} or ${legalConfig.phoneNumber}.`,
		],
	},
];

export const termsConditionsSections: LegalSection[] = [
	{
		title: 'Acceptance of Terms',
		paragraphs: [
			`By accessing ${legalConfig.websiteUrl}, requesting a quote, or using our services, you agree to these Terms & Conditions and any related policies referenced on our site.`,
			`If you do not agree to these terms, do not use the site or services provided by ${legalConfig.companyName}.`,
		],
	},
	{
		title: 'Services and Estimates',
		paragraphs: [
			`${legalConfig.companyName} provides exterior remodeling and related services based on project scope, site conditions, and availability of labor and materials.`,
			'Any estimate or proposal is based on information available at the time and may be revised if project requirements change.',
		],
	},
	{
		title: 'Scheduling and Site Access',
		paragraphs: [
			'Project timelines are estimates and may change due to weather, material delays, permit timing, safety considerations, or other factors outside our control.',
			'You agree to provide reasonable and safe access to the property so work can be completed as scheduled.',
		],
	},
	{
		title: 'Payments',
		paragraphs: [
			'Payment terms, deposits, and installment schedules will be provided in your estimate, invoice, or signed service agreement.',
			'Late or unpaid balances may result in project delays, suspension of work, or additional fees as permitted by applicable law and contract terms.',
		],
	},
	{
		title: 'Cancellations and Rescheduling',
		paragraphs: [
			'If you need to cancel or reschedule, please notify us as early as possible using the contact details below.',
			'Cancellation fees or material restocking charges may apply when costs have already been incurred on your behalf.',
		],
	},
	{
		title: 'Warranties and Disclaimers',
		paragraphs: [
			'Any workmanship or product warranties are limited to those expressly stated in your service agreement or provided by the manufacturer.',
			'Except as required by law, services are provided without additional implied warranties, including implied warranties of merchantability or fitness for a particular purpose.',
		],
	},
	{
		title: 'Limitation of Liability',
		paragraphs: [
			`To the maximum extent allowed by law, ${legalConfig.companyName} is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website or services.`,
			`Our total liability for any claim related to services will not exceed the amount paid to ${legalConfig.companyName} for the specific project giving rise to the claim, unless otherwise required by law.`,
		],
	},
	{
		title: 'Intellectual Property',
		paragraphs: [
			'All website content, branding, graphics, and text are owned by us or used with permission and may not be copied or reused without written consent.',
			'You may use site content for personal informational purposes only.',
		],
	},
	{
		title: 'Third-Party Links',
		paragraphs: [
			'Our website may include links to third-party websites for convenience. We are not responsible for third-party content, policies, or practices.',
			'Use of third-party sites is at your own risk and subject to their terms.',
		],
	},
	{
		title: 'Governing Law',
		paragraphs: [
			`These terms are governed by the laws of ${legalConfig.governingState}, without regard to conflict-of-law principles.`,
			'Any dispute arising from these terms or services will be handled in the appropriate courts of that jurisdiction unless otherwise required by law.',
		],
	},
	{
		title: 'Contact Information',
		paragraphs: [
			`Questions about these terms can be sent to ${legalConfig.email} or ${legalConfig.phoneNumber}.`,
		],
	},
];
