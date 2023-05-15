import clsx from 'clsx';
import { MutatingDots } from 'react-loader-spinner';
import Icon from '../icon';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function AvatarCircle({ className, replaceClassNameAvatar, title, label, src, loading }: Props) {
    return (
        <div className={clsx('flex justify-start items-center wrapper-avatar-cirle', title && 'space-x-2.5', className)}>
            <div className='border-avatar-outer'>
                <div className='border-avatar-inner'>
                    {loading ? (
                        <MutatingDots color='#0C4DF3' secondaryColor='#0C4DF3' height={100} width={100} />
                    ) : (
                        <ImageWithFallback
                            alt='avatar'
                            src={src}
                            className={clsx(replaceClassNameAvatar || 'rounded-full object-cover w-[130px] h-[130px]')}
                            iconFallback={<Icon name='employee-circle' className={clsx('text-primary/70 object-cover w-[130px] h-[130px]')} />}
                        />
                    )}
                </div>
            </div>
            <div className={clsx('flex flex-col justify-start items-start', label && 'pr-2.5')}>
                {title && <p className='text-base text-white font-bold'>{title}</p>}
                {label && <p className='text-base text-white/70'>{label}</p>}
            </div>
        </div>
    );
}

type Props = {
    className?: string;
    replaceClassNameAvatar?: string;
    title?: string;
    label?: string;
    src: string;
    loading?: boolean;
};
