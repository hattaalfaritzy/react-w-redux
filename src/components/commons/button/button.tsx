import clsx from 'clsx';
import { ThreeDots } from 'react-loader-spinner';

export default function Button({
    type = 'button',
    onClick = () => {},
    disabled,
    loading,
    size = 'md',
    label,
    variant = 'primary',
    align = 'center',
    outline,
    iconLeft,
    iconRight,
    className,
    classNameLabel,
    rounded,
    ...props
}: Props) {
    const styleBySize = {
        sm: 'btn-sm',
        md: 'btn-md',
        none: 'bt-remove-size',
    }[size];

    const styleByVariant = {
        primary: outline ? 'btn-outline-primary' : 'btn-primary',
        light: outline ? 'btn-outline-light' : 'btn-light',
        error: outline ? 'btn-outline-error' : 'btn-error',
        transparent: 'btn-transparent',
    }[variant];

    const loaderColor = {
        primary: outline ? '#0C4DF3' : '#FFFFFF',
        light: outline ? '#051F61' : '#051F61',
        error: outline ? '#CF3F24' : '#FFFFFF',
        transparent: '#0C4DF3',
    }[variant];

    const styleByAlign = {
        start: 'justify-start items-center',
        center: 'justify-center items-center',
        end: 'justify-end items-center',
    }[align];

    return (
        <button
            type={type}
            className={clsx(
                'btn',
                styleBySize,
                styleByVariant,
                className,
                disabled && !outline && 'bg-opacity-70 border-opacity-0 cursor-default',
                disabled && outline && 'bg-primary bg-opacity-30 cursor-default',
                rounded ? 'rounded-full' : ''
            )}
            disabled={loading || disabled}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            {...props}>
            {loading ? (
                <div className={clsx('flex', styleByAlign)}>
                    <ThreeDots color={loaderColor} height={19} width={19} />
                </div>
            ) : (
                <div className={clsx('flex', styleByAlign)}>
                    {iconLeft && iconLeft}
                    {label && <span className={clsx(classNameLabel, iconLeft && 'pl-2', iconRight && 'pr-2')}>{label}</span>}
                    {iconRight && iconRight}
                </div>
            )}
        </button>
    );
}

type Props = JSX.IntrinsicElements['button'] & {
    className?: string;
    classNameLabel?: string;
    outline?: boolean;
    label?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: string;
    variant?: string;
    align?: string;
    size?: string;
    rounded?: boolean;
};
