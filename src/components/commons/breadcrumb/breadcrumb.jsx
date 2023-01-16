import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

export default function Breadcrumb({ className, routes }) {
    return (
        <div className={clsx('flex justify-start items-center max-w-max', className)}>
            {routes
                ?.filter((a) => a)
                ?.map((item, index) => {
                    if (item.href) {
                        return (
                            <NavLink to={item.href} key={item.label}>
                                <div className={clsx('flex items-center text-sm')}>
                                    {index !== 0 && <FiChevronRight size={18} className='text-white/70' />}
                                    {index === routes.length - 1 ? (
                                        <span className={clsx('p-1 text-primary font-semibold rounded hover:bg-primary/30 hover:text-primary on-hover')}>
                                            {item.label}
                                        </span>
                                    ) : (
                                        <span className={clsx('p-1 text-white/70 rounded hover:bg-primary/30 hover:text-primary on-hover')}>{item.label}</span>
                                    )}
                                </div>
                            </NavLink>
                        );
                    }
                    return (
                        <div key={item.label} className={clsx('flex items-center font-semibold text-sm text-primary cursor-default')}>
                            {index !== 0 && <FiChevronRight size={18} className='text-white/70' />}
                            {index === routes.length - 1 ? (
                                <span className={clsx('p-1 text-primary font-semibold rounded hover:bg-primary/30 hover:text-primary on-hover')}>
                                    {item.label}
                                </span>
                            ) : (
                                <span className={clsx('p-1 text-white/70 rounded hover:bg-primary/30 hover:text-primary on-hover')}>{item.label}</span>
                            )}
                        </div>
                    );
                })}
        </div>
    );
}

Breadcrumb.propTypes = {
    className: PropTypes.string,
    routes: PropTypes.array,
};
