import clsx from 'clsx';
import { Message } from '../../commons';

export default function InputTextarea({
    className,
    replaceClassNameLabel,
    label,
    register,
    errMessage,
    value,
    maxLength = 200,
    rounded = false,
    important,
    iconInfo,
    ...props
}: Props) {
    return (
        <div className={clsx('flex flex-col w-full', className)}>
            {label && (
                <div className='flex flex-row justify-between items-center'>
                    <div className={clsx(replaceClassNameLabel || 'form-label pb-1.5')}>
                        {label} {important && <span className='text-error'>*</span>}
                    </div>
                    {iconInfo && iconInfo}
                </div>
            )}
            <div className={clsx('textarea-control-default border border-[#D9DDE2] rounded', rounded && 'rounded-full', errMessage && 'form-error')}>
                <textarea rows='3' className={clsx('input-form-default')} value={value} maxLength={maxLength} {...register} {...props} />
                <div className='absolute right-2 bottom-2 flex flex-row justify-end items-center'>
                    <span className='text-sm text-[#D9DDE2]'>{value?.length}</span>
                    <span className='text-sm text-[#D9DDE2]'>/</span>
                    <span className='text-sm text-[#D9DDE2]'>{maxLength}</span>
                </div>
            </div>
            {errMessage && <Message className='mt-2' label={errMessage} />}
        </div>
    );
}

type Props = JSX.IntrinsicElements['textarea'] & {
    className?: string;
    replaceClassNameLabel?: string;
    label?: string;
    register?: any;
    errMessage?: any;
    value?: any;
    maxLength?: number;
    rounded?: boolean;
    important?: boolean;
    iconInfo?: React.ReactNode;
};
