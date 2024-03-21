import { Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Sitemap from './pages/Sitemap.jsx';
import FinishBab from './pages/FinishBab.jsx';
import ConfirmBab from './pages/ConfirmBab.jsx';
import WaitBab from './pages/WaitBab.jsx';
import PendingParty from './pages/PendingParty.jsx';
import CreateParty from './pages/CreateParty.jsx';

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
        name: '로그인',
    },
    {
        path: '/register',
        element: <Register />,
        name: '회원가입',
    },
    {
        path: '/party/pending',
        element: <PendingParty />,
        footer: true,
        name: '대기중인 밥약',
    },
    {
        path: '/party/create',
        element: <CreateParty />,
        footer: true,
        name: '밥약 생성하기',
    },
    {
        path: '/confirmbab',
        element: <ConfirmBab />,
        footer: true,
        name: '확정된 밥약 목록',
    },
    {
        path: '/waitbab',
        element: <WaitBab />,
        footer: true,
        name: '대기중인 밥약 목록',
    },
    {
        path: '/finishbab',
        element: <FinishBab />,
        footer: true,
        name: '종료된 밥약 목록',
    },
];

export default routes;
