import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Icon from '../icon';

export default function Breadcrumb({ className, routes }: Props) {
    return (
        <div className={clsx('flex justify-start items-center max-w-max space-x-2', className)}>
            {routes
                ?.filter((a: any) => a)
                ?.map((item: any, index: number | string) => {
                    if (item.href) {
                        return (
                            <NavLink to={item.href} key={item.label}>
                                <div className={clsx('flex flex-row justify-start items-center space-x-2')}>
                                    {index !== 0 && <Icon name='chevron-right' width={6} className='fill-white/70' />}
                                    {index === routes.length - 1 ? (
                                        <span className={clsx('p-1 text-base text-primary font-bold')}>{item.label}</span>
                                    ) : (
                                        <span className={clsx('p-1 text-base text-white/70')}>{item.label}</span>
                                    )}
                                </div>
                            </NavLink>
                        );
                    }
                    return (
                        <div key={item.label} className={clsx('flex flex-row justify-start items-center space-x-2')}>
                            {index !== 0 && <Icon name='chevron-right' width={6} className='fill-white/70' />}
                            {index === routes.length - 1 ? (
                                <span className={clsx('p-1 text-base text-primary font-bold')}>{item.label}</span>
                            ) : (
                                <span className={clsx('p-1 text-base text-white/70')}>{item.label}</span>
                            )}
                        </div>
                    );
                })}
        </div>
    );
}

type Props = {
    className?: string;
    routes?: any;
};
