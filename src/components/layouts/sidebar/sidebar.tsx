import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { NAV_MENU } from '@/constant/layout';
import useSidebar from '@/hooks/use-sidebar';
import { Icon, Logo } from '@/components/commons';

export default function Sidebar() {
    const { closeSidebar } = useSidebar();

    return (
        <aside className='sider'>
            <div className='flex flex-col w-full py-8 space-y-16 rounded hide-mobile'>
                <div className='flex justify-center items-center w-full px-6'>
                    <Logo withHref={false} />
                </div>
                <div className='flex flex-col space-y-3 px-3 2xl:px-6'>
                    {NAV_MENU.map((item: any, index: string | number) => (
                        <NavLink key={index} to={item.href}>
                            {({ isActive }) => (
                                <div
                                    className={clsx(
                                        'flex flex-row justify-start items-center space-x-3 py-2 px-3 cursor-pointer',
                                        isActive ? 'text-white bg-primary rounded-xl' : 'text-white'
                                    )}>
                                    <Icon name={item.icon} className={clsx(isActive ? 'fill-white' : 'fill-white')} />
                                    <span className='text-sm 2xl:text-base'>{item.label}</span>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='flex flex-col justify-start w-full h-screen overflow-y-auto py-8 space-y-8 hide-website'>
                <div className='flex justify-between items-center px-8'>
                    <button onClick={closeSidebar} type='button' className='flex flex-row justify-start items-end space-x-1'>
                        <Logo withHref={false} />
                    </button>
                    <Icon name='close' width={24} className='fill-primary' onClick={closeSidebar} />
                </div>
                <div className='flex flex-col space-y-3 px-6 py-8 border-white border-y'>
                    {NAV_MENU.map((item: any, index: string | number) => (
                        <NavLink key={index} to={item.href}>
                            {({ isActive }) => (
                                <div
                                    className={clsx(
                                        'flex flex-row justify-start items-center space-x-3 py-2 px-4 cursor-pointer',
                                        isActive ? 'text-white bg-primary rounded-xl' : 'text-white hover:text-primary'
                                    )}
                                    onClick={closeSidebar}>
                                    <Icon name={item.icon} className={clsx(isActive ? 'fill-white' : 'fill-white')} />
                                    <span className='text-base'>{item.label}</span>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
        </aside>
    );
}
