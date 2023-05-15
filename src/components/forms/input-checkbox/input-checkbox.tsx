import clsx from 'clsx';

export default function InputCheckbox({
    className,
    replaceClassNameLabel,
    label,
    register,
    variant = 'default',
    important,
    id,
    checked,
    onChange,
    defaultChecked,
    disabled,
    ...props
}: Props) {
    const styleByVariant = {
        default: 'flex-row justify-center space-x-2',
        reverse: 'flex-row flex-row-reverse justify-center',
    }[variant];

    return (
        <div className={clsx('flex flex-col max-w-fit', className)}>
            <label htmlFor={id} className={clsx('flex', styleByVariant, disabled ? 'opacity-80' : 'cursor-pointer')}>
                <input
                    type='checkbox'
                    id={id}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={onChange}
                    checked={checked}
                    {...register}
                    {...props}
                />
                {label && (
                    <div className={clsx(replaceClassNameLabel || 'text-sm text-white pr-2')}>
                        {label} {important && <span className='text-error'>*</span>}
                    </div>
                )}
            </label>
        </div>
    );
}

type Props = JSX.IntrinsicElements['input'] & {
    className?: string;
    replaceClassNameLabel?: string;
    label?: string;
    register?: any;
    variant?: 'default' | 'reverse';
    important?: boolean;
    id?: string;
    checked?: boolean;
    onChange?: () => void;
    defaultChecked?: boolean;
    disabled?: boolean;
};
