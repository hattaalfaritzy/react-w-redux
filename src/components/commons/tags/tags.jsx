import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Tags({ className, label, href = '#', variant = 'default' }) {
    if (!label) return null;

    switch (variant) {
        case 'default':
            return (
                <div className={clsx('flex justify-center items-center rounded-lg px-2 md:px-4 py-0.5 md:py-1 bg-primary/70', className)}>
                    <p className='text-xxs md:text-xs text-white font-semibold'>{label}</p>
                </div>
            );
        case 'hashtags':
            return (
                <Link to={href}>
                    <div className={clsx('flex justify-start items-start cursor-pointer', className)}>
                        <p className='text-xs md:text-xl text-white hover:text-primary on-hover'># {label}</p>
                    </div>
                </Link>
            );
        default:
            return <div />;
    }
}

Tags.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'hashtags']),
};
