import clsx from 'clsx';

export default function Card({ className, classNameHeader, withShadow, rounded = true, renderHeader, children, onClick }: Props) {
    if (!children) return null;

    return (
        <div aria-hidden='true' className={clsx('flex bg-white bg-opacity-10 p-3', className, withShadow && 'shadow-md', rounded && 'rounded-lg', onClick && 'cursor-pointer')} onClick={onClick}>
            {renderHeader && <div className={clsx('flex', classNameHeader)}>{renderHeader}</div>}
            {children}
        </div>
    );
}

type Props = {
    className?: string;
    classNameHeader?: string;
    withShadow?: boolean;
    rounded?: boolean;
    renderHeader?: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
};
