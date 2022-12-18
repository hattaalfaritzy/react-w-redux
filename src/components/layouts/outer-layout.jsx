import { Outlet } from 'react-router-dom';

export default function OuterLayout() {
    return (
        <div className='flex flex-col h-auto min-h-screen w-full bg-dark'>
            <Outlet />
        </div>
    );
}
