import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function Logo({ className, withHref = true }: Props) {
    return withHref ? (
        <NavLink to='/'>
            {({ isActive }) => (
                <div className={clsx('', className, isActive ? '' : '')}>
                     <span
                        className={clsx('text-xl lg:text-2xl 2xl:text-3xl font-semibold tracking-wide on-hover', className, isActive ? 'text-primary' : 'text-white hover:text-primary ')}>
                        React Vite w/ Redux
                    </span>
                </div>
            )}
        </NavLink>
    ) : (
        <div className={clsx('', className)}>
        <span className={clsx('text-primary text-xl lg:text-2xl 2xl:text-3xl font-semibold tracking-wide on-hover', className)}>React Vite w/ Redux</span>
        </div>
    );
}

type Props = {
    className?: string;
    withHref?: boolean;
};
