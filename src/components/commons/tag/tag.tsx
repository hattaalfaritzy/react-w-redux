import clsx from 'clsx';

export default function Tag({ className, type = 'pending', label, rounded = true }: Props) {
    if (!label) return null;

    const style = {
        draft: 'bg-[#F4F4F4] text-[#3C434E]',
        pending: 'bg-warning/10 text-warning',
        approved: 'bg-success/10 text-success',
        submitted: 'bg-success/10 text-success',
        rejected: 'bg-error/10 text-error',
    }[type];

    return (
        <div className={clsx('flex justify-center items-center rounded-md px-2.5 py-1 w-full max-w-max', rounded && 'rounded-full', style, className)}>
            <div className='flex justify-center items-center text-xs'>{label}</div>
        </div>
    );
}

type Props = {
    className?: string;
    label?: string;
    type?: 'draft' | 'pending' | 'approved' | 'submitted' | 'rejected';
    rounded?: boolean;
};
