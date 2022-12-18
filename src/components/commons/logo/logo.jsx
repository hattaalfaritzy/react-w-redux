import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Logo({ className, withHref = true }) {
    return withHref ? (
        <NavLink to='/'>
            {({ isActive }) => (
                <span
                    className={clsx('text-2xl font-semibold tracking-wide on-hover', className, isActive ? 'text-primary' : 'text-white hover:text-primary ')}>
                    Portfolio
                </span>
            )}
        </NavLink>
    ) : (
        <span className={clsx('text-primary text-2xl font-semibold tracking-wide on-hover', className)}>Portfolio</span>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
    withHref: PropTypes.bool,
};
