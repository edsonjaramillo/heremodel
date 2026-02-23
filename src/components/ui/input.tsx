import { useFormContext } from 'react-hook-form';
import { cn } from '../../lib/cn';
import { Span } from './text';

interface InputRequiredProps {
	id: string;
	type: React.ComponentProps<'input'>['type'];
	field: string;
	autoComplete: React.ComponentProps<'input'>['autoComplete'];
}

type InputProps = React.ComponentProps<'input'> & InputRequiredProps;
export function Input({
	autoComplete,
	className,
	field,
	id,
	required,
	type,
	...props
}: InputProps) {
	const { register } = useFormContext();
	const style = cn(
		'h-9 w-full border border-muted bg-transparent px-3 py-2 text-sm text-black shadow-base placeholder:text-gray focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-offset-2 focus-visible:outline-0 disabled:cursor-not-allowed disabled:text-muted disabled:placeholder:text-muted',
		className
	);
	return (
		<input
			autoComplete={autoComplete}
			className={style}
			id={id}
			type={type}
			{...register(field, { required })}
			{...props}
		/>
	);
}

type InputGroupProps = React.ComponentProps<'div'>;
export function InputGroup({ children, className, ...props }: InputGroupProps) {
	const style = cn('grid w-full max-w-form items-center gap-2', className);
	return (
		<div className={style} {...props}>
			{children}
		</div>
	);
}

type InputColumnsProps = React.ComponentProps<'div'>;
export function InputColumns({ children, className, ...props }: InputColumnsProps) {
	const style = cn('grid grid-cols-2 gap-4', className);
	return (
		<div className={style} {...props}>
			{children}
		</div>
	);
}

type InputDescriptionProps = React.ComponentProps<'span'>;
export function InputDescription({ className, children, ...props }: InputDescriptionProps) {
	return (
		<Span className={cn(className, 'line-clamp-1')} size="sm" textColor="gray" {...props}>
			{children}
		</Span>
	);
}

type RadioGroupProps = React.ComponentProps<'div'>;
export function RadioGroup({ children, className, ...props }: RadioGroupProps) {
	return (
		<div className={cn('grid gap-2 sm:grid-cols-2', className)} role="radiogroup" {...props}>
			{children}
		</div>
	);
}

interface RadioOptionRequiredProps {
	field: string;
	id: string;
	label: string;
	value: string;
}
type RadioOptionProps = React.ComponentProps<'input'> & RadioOptionRequiredProps;
export function RadioOption({
	className,
	field,
	id,
	label,
	required,
	value,
	...props
}: RadioOptionProps) {
	const { register } = useFormContext();
	return (
		<label
			htmlFor={id}
			className={cn(
				'flex cursor-pointer items-center gap-2 border border-muted px-3 py-2 text-sm text-black shadow-base',
				className
			)}>
			<input
				className="accent-info"
				id={id}
				type="radio"
				value={value}
				{...register(field, { required })}
				{...props}
			/>
			{label}
		</label>
	);
}

type CheckboxGroupProps = React.ComponentProps<'div'>;
export function CheckboxGroup({ children, className, ...props }: CheckboxGroupProps) {
	return (
		<div className={cn('grid gap-2', className)} {...props}>
			{children}
		</div>
	);
}

interface CheckboxOptionRequiredProps {
	field: string;
	id: string;
	label: string;
	value: string;
}
type CheckboxOptionProps = React.ComponentProps<'input'> & CheckboxOptionRequiredProps;
export function CheckboxOption({
	className,
	field,
	id,
	label,
	required,
	value,
	...props
}: CheckboxOptionProps) {
	const { register } = useFormContext();
	return (
		<label
			htmlFor={id}
			className={cn(
				'flex cursor-pointer items-center gap-2 border border-muted px-3 py-2 text-sm text-black shadow-base',
				className
			)}>
			<input
				className="h-4 w-4 accent-info"
				id={id}
				type="checkbox"
				value={value}
				{...register(field, { required })}
				{...props}
			/>
			{label}
		</label>
	);
}

interface InputErrorRequiredProps {
	field: string;
}
type InputErrorProps = React.ComponentProps<'span'> & InputErrorRequiredProps;
export function InputError({ className, field, ...props }: InputErrorProps) {
	const { formState } = useFormContext();
	const { errors } = formState;
	const error = errors?.[field];

	if (!error || !error.message) {
		return undefined;
	}

	return (
		<Span
			className={cn('line-clamp-1 w-full font-semibold', className)}
			size="sm"
			textColor="danger"
			{...props}>
			{error.message.toString()}
		</Span>
	);
}
