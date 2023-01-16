import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../stores/actions/auth';
import { MdClose } from 'react-icons/md';
import { NAV_MENU } from '../../../contants/layout';
import { Button, Logo } from '../../commons';
import useSidebar from '../../../hooks/use-sidebar';

export default function Sidebar() {
    const { toggleSidebar, closeSidebar } = useSidebar();

    const dispatch = useDispatch();

    const onClickLogout = () => {
		dispatch(logout());
	};

    return (
        <aside>
            <div className='flex flex-col justify-between w-full h-full p-4 lg:p-6'>
                <div className='flex flex-col w-full h-full'>
                    <div className='flex justify-between items-center mb-4'>
                        <button
                            onClick={closeSidebar}
                            type='button'
                            className='flex flex-row justify-start items-end space-x-1'
                        >
                            <Logo withHref={false} />
                        </button>
                        <MdClose
                            onClick={toggleSidebar}
                            className='text-white hover:text-primary on-hover text-2xl cursor-pointer'
                        />
                    </div>
                    <div className='flex flex-col border-primary-primary border-opacity-10 border-y py-3'>
                        {NAV_MENU.map((menu) => (
                            <Link to={menu.href} key={menu.label}>
                                <button
                                    className='text-sm lg:text-base text-left py-3 text-white hover:text-primary on-hover'
                                    onClick={closeSidebar}
                                    type='button'
                                >
                                    {menu.label}
                                </button>
                            </Link>
                        ))}
                    </div>
                    <Button type='button' variant='danger' label='Logout' className='my-4' onClick={onClickLogout} />
                </div>
            </div>
        </aside>
    );
}
