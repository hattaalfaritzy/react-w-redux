import { Home, Login, NotFound } from '../../pages';
import { Navigate } from 'react-router-dom';
import DefaulLayout from '../../components/layouts/default-layout';
import OuterLayout from '../../components/layouts/outer-layout';

const router = (isAuth) => [
    {
        path: 'app',
        element: isAuth ? <DefaulLayout /> : <Navigate to='/login' />,
        children: [
            { path: 'dashboard', element: <Home /> },
            { path: '*', element: <Navigate to='/404' /> },
        ],
    },
    {
        path: '/',
        element: !isAuth ? <OuterLayout /> : <Navigate to='/app/dashboard' />,
        children: [
            { path: 'login', element: <Login /> },
            { path: '/', element: <Navigate to='/app/dashboard' /> },
            { path: '*', element: <Navigate to='/404' /> },
        ],
    },
    {
        path: '404',
        element: <OuterLayout />,
        children: [
            { path: '', element: <NotFound /> },
        ],
    },
];

export default router;
