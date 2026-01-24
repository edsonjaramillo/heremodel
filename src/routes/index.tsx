import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });
function App() {
	return (
		<div>
			<ul>
				<li>Hello</li>
				<li>There</li>
			</ul>
		</div>
	);
}
