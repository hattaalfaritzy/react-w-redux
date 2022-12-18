import { Home, Login, NotFound, Playground } from '../../pages';
import { Navigate } from 'react-router-dom';
import DefaulLayout from '../../components/layouts/default-layout';
import OuterLayout from '../../components/layouts/outer-layout';
import educations from './education';
import experiences from './experiences';
import projects from './projects';
import profile from './profile';

const router = (isAuth) => [
    {
        path: 'backoffice',
        element: isAuth ? <DefaulLayout /> : <Navigate to='/login' />,
        children: [
            { path: 'dashboard', element: <Home /> },
            ...educations,
            ...experiences,
            ...projects,
            ...profile,
            { path: '*', element: <Navigate to='/404' /> },
        ],
    },
    {
        path: '/',
        element: !isAuth ? <OuterLayout /> : <Navigate to='/backoffice/dashboard' />,
        children: [
            { path: 'login', element: <Login /> },
            { path: '/', element: <Navigate to='/backoffice/dashboard' /> },
            { path: '*', element: <Navigate to='/404' /> },
        ],
    },
    {
        path: '404',
        element: <OuterLayout />,
        children: [
            { path: '', element: <NotFound /> },
            { path: 'playground', element: <Playground /> },
        ],
    },
];

export default router;
