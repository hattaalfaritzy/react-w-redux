import clsx from 'clsx';
import { FaUserCircle } from 'react-icons/fa';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function Avatar({ className, variant = 'default', replaceClassNameAvatar, title, label, src }: Props) {
    const styleByVariant = {
        default: 'flex-row',
        reverse: 'flex-row-reverse',
    }[variant];

    return (
        <div className={clsx('flex justify-start items-center', title && 'space-x-2.5', styleByVariant, className)}>
            <ImageWithFallback
                alt='avatar'
                src={src}
                className={clsx(replaceClassNameAvatar || 'rounded-full object-cover w-14 h-14')}
                iconFallback={<FaUserCircle className={clsx('text-white object-cover w-14 h-14')} />}
            />
            <div className={clsx('flex flex-col justify-start items-start', label && 'pr-2.5')}>
                {title && <p className='text-base text-white font-bold capitalize'>{title}</p>}
                {label && <p className='text-base text-white/75'>{label}</p>}
            </div>
        </div>
    );
}

type Props = {
    className?: string;
    variant?: string;
    replaceClassNameAvatar?: string;
    title?: string;
    label?: string;
    src: string;
};
