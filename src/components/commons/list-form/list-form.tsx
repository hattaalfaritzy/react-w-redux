import clsx from 'clsx';

export default function ListForm({ className, classNameTitle, classNameValue, title, value, loading, important, renderValue }: Props) {
    return (
        <div className={clsx('flex flex-col justify-start items-start', loading && 'space-y-1', className)}>
            <span className={clsx('text-base', classNameTitle || 'text-base text-white')}>
                {title} {important && <span className='text-error'>*</span>}
            </span>
            {loading ? (
                <span className='rounded-full bg-light-700 h-4 w-2/3 animate-pulse' />
            ) : (
                renderValue || <span className={clsx('text-base text-primary font-bold', classNameValue)}>{value}</span>
            )}
        </div>
    );
}

type Props = {
    className?: string;
    classNameTitle?: string;
    classNameValue?: string;
    title?: string;
    value?: string;
    loading?: boolean;
    important?: boolean;
    renderValue?: React.ReactNode;
};
