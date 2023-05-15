import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <div id='layout-default'>
            <div className='container-layout'>
                <Sidebar />
                <div className='flex flex-col justify-start w-full h-full'>
                    <Header />
                    <main className='main'>
                        <Outlet />
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
