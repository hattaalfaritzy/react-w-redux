import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { MdOutlineBrokenImage } from 'react-icons/md';

export default function ImageWithFallback({ src, alt, className, iconFallback, ...props }: Props) {
    const [isError, setIsError] = useState<any | null>(null);

    useEffect(() => {
        setIsError(false);
    }, [src]);

    return isError ? (
        <div className={clsx('bg-dark-quaternary justify-center flex', className)}>
            {iconFallback || <MdOutlineBrokenImage className={clsx('text-black text-3xl m-auto')} />}
        </div>
    ) : (
        <img id={src} src={src || ''} alt={alt} className={className} loading='lazy' {...props} onError={() => setIsError(true)} />
    );
}

type Props = JSX.IntrinsicElements['img'] & {
    src: string;
    alt: string;
    className?: string;
    iconFallback?: any;
};
