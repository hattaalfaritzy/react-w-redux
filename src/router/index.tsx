import { Dashboard, Login, NotFound, Playground } from '@/views';
import { Navigate } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/default-layout';
import OuterLayout from '@/components/layouts/outer-layout';
import products from './products';
import users from './users';

const router = (isAuth: any) => [
    {
        path: 'app',
        element: isAuth ? <DefaultLayout /> : <Navigate to='/login' />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            ...products,
            ...users,
            { path: 'playground', element: <Playground /> },
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
        children: [{ path: '', element: <NotFound /> }],
    },
];

export default router;
