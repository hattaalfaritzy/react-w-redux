import { MdClose } from 'react-icons/md';
import { NAV_MENU } from '../../../contants/layout';
import useSidebar from '../../../hooks/use-sidebar';
import { Button, Logo } from '../../commons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const { toggleSidebar, closeSidebar } = useSidebar();

    return (
        <aside>
            <div className='flex flex-col justify-between w-full h-screen overflow-y-auto p-6'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center mb-4'>
                        <button
                            onClick={closeSidebar}
                            type='button'
                            className='flex flex-row justify-start items-end space-x-1'
                        >
                            <Logo withHref={false} />
                            <span className='text-sm leading-none'>
                                Assessment Test
                            </span>
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
                                    className='text-base text-left py-3 text-white hover:text-primary on-hover'
                                    onClick={closeSidebar}
                                    type='button'
                                >
                                    {menu.label}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
                <Button type='button' variant='danger' label='Logout' />
            </div>
        </aside>
    );
}
