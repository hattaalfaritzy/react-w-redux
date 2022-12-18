import HeaderNavbar from './header/header-navbar';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div id="layout-default">
      <HeaderNavbar />
      <Sidebar />
      <main className="px--default py--default max-w-screen-2xl mx-auto w-full bg-dark">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}
