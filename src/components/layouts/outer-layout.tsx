import { Outlet } from 'react-router-dom';

export default function OuterLayout() {
    return (
        <div className='flex flex-col w-screen h-screen min-h-screen bg-[#F9FAFF]'>
            <Outlet />
        </div>
    );
}
