import { Home, Login, Register, NotFound } from '../../pages';
import { Navigate } from 'react-router-dom';
import DefaulLayout from '../../components/layouts/default-layout';
import OuterLayout from '../../components/layouts/outer-layout';
import lists from './lists';

const router = (isAuth) => [
    {
        path: 'app',
        element: isAuth ? <DefaulLayout /> : <Navigate to='/login' />,
        children: [
            { path: 'dashboard', element: <Home /> },
            ...lists,
            { path: '*', element: <Navigate to='/404' /> },
        ],
    },
    {
        path: '/',
        element: !isAuth ? <OuterLayout /> : <Navigate to='/app/dashboard' />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
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
