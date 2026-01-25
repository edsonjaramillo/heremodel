interface ResponsiveProps {
	children: React.ReactNode;
}

export function Responsive({ children }: ResponsiveProps) {
	return <div className="mx-auto w-responsive">{children}</div>;
}
