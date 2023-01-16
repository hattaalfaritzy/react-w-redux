import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function Avatar({ className, variant = 'default', replaceClassNameAvatar, name, src }) {
    const styleByVariant = {
        default: 'flex-row',
        reverse: 'flex-row-reverse',
    }[variant];

    return (
        <div className={clsx('flex justify-start items-center', name && 'space-x-2', styleByVariant, className)}>
            <ImageWithFallback
                alt='avatar'
                src={src}
                className={clsx(replaceClassNameAvatar || 'rounded-full object-cover w-10 h-10')}
                iconFallback={<FaUserCircle className={clsx('text-primary')} />}
            />
            {name && <p className='text-white text-sm pr-2'>{name}</p>}
        </div>
    );
}

Avatar.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'reverse']),
    replaceClassNameAvatar: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
};
