import clsx from 'clsx';
import { useTypedDispatch } from '@/hooks/use-redux';
import { logout } from '@/stores/actions/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { NAV_MENU } from '@/constant/layout';
import useSidebar from '@/hooks/use-sidebar';
import { Button, Dropdown, Logo, Icon } from '@/components/commons';
import { authSelector } from '@/stores/selectors';
import { shallowEqual, useSelector } from 'react-redux';

export default function Header() {
    const { toggleSidebar } = useSidebar();
    const { user } = useSelector(authSelector, shallowEqual);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

	const onClickLogout = async () => {
		await dispatch(logout());
	};

    const userDropdown = [
        {
            label: 'Logout',
            onClick: () => {
                onClickLogout();
                navigate(0);
            },
        },
    ];

    return (
        <header className={clsx('header')}>
            <div className='flex flex-row justify-between items-center w-full h-full hide-mobile'>
                <div className='flex flex-row justify-start items-center'>
					<Logo />
				</div>
                <div className='flex flex-row justify-start items-center space-x-6'>
                    <div className='flex flex-row justify-start items-center space-x-6'>
                        {NAV_MENU.map((item, index) => (
                            <NavLink key={index} to={item.href}>
                                {({ isActive }) => (
                                    <div
                                        className={clsx(
                                            'group flex flex-col space-y-1 cursor-pointer',
                                            isActive ? 'text-primary' : 'text-white hover:text-primary'
                                        )}>
                                        <span className='text-sm transation duration-300'>{item.label}</span>
                                        <div className='relative w-4/5 h-[2px]'>
                                            <div
                                                className={clsx(
                                                    'absolute h-full transation-[width] duration-300 bg-primary',
                                                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                )}
                                            />
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        ))}
                        <NavLink to='/' onClick={onClickLogout} className='group flex flex-col space-y-1 cursor-pointer text-white hover:text-error'>
                            <span className='text-sm transation duration-300'>Logout</span>
                            <div className='relative w-4/5 h-[2px]'>
                                <div className='absolute h-full w-0 group-hover:w-full transation-[width] duration-300 bg-error'></div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center w-full h-full hide-website space-x-6'>
                <Dropdown label={user || ''} labelChange={true} data={userDropdown} onChange={(val: any) => val.onClick()} wrapperClassName='w-full' className='w-full h-full' />
                <div className='flex flex-row justify-center items-center'>
                    <Button
                        rounded
                        variant='light'
                        className='w-12 h-12'
                        size='none'
                        onClick={toggleSidebar}
                        iconLeft={<Icon name='menu' className='text-2xl fill-[#051F61] hover:fill-primary on-hover' />}
                    />
                </div>
            </div>
        </header>
    );
}
