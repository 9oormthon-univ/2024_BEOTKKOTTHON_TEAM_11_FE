import { Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Sitemap from './pages/Sitemap.jsx';
import ConfirmBab from './pages/ConfirmBab.jsx';
import TimeTableTest from './pages/TimeTableTest.jsx';
import WaitBab from './pages/WaitBab.jsx';
import FinishBab from './pages/FinishBab.jsx';

const routes = [
    {
        path: '/',
        element: <Sitemap />,
        previous: false,
    },
    {
        path: '/login',
        element: <Login />,
        logo: false,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/test-timetable',
        element: <TimeTableTest />,
    },
    {
        path: '/confirmbab',
        element: <ConfirmBab />,
        footer: true,
    },
    {
        path: '/waitbab',
        element: <WaitBab />,
        footer: true,
    },
    {
        path: '/finishbab',
        element: <FinishBab />,
        footer: true,
    },
];

export default routes;
