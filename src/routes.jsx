import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Sitemap from './pages/Sitemap.jsx';
import FinishBab from './pages/FinishBab.jsx';
import ConfirmBab from './pages/ConfirmBab.jsx';
import WaitBab from './pages/WaitBab.jsx';
import PendingParty from './pages/PendingParty.jsx';
import CreateEvent from './pages/CreateEvent.jsx';
import SuccessRegister from './pages/SuccessRegister.jsx';
import ShareBab from './pages/ShareBab.jsx';
import Payment from './pages/Payment.jsx';
import ScheduledEvent from './pages/ScheduledEvent.jsx';
import Logout from './pages/Logout.jsx';
import Intro from './pages/Intro.jsx'
const routes = [
    {
        path: '/intro',
        element: <Intro/>,
        logo: false,
        name: '소개페이지',
    },
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
        path: '/logout',
        element: <Logout />,
        logo: false,
        previous: false,
        name: '로그아웃',
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
        title: '대기중인 밥약',
    },
    {
        path: '/party/scheduled',
        element: <ScheduledEvent />,
        footer: true,
        name: '확정된 밥약',
        title: '확정된 밥약',
    },
    {
        path: '/party/create',
        element: <CreateEvent />,
        footer: true,
        name: '밥약 생성하기',
        title: '밥약 만들기',
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
    {
        path: '/successregister',
        element: <SuccessRegister />,
        logo: false,
        previous: false,
        name: '회원가입 완료',
    },
    {
        path: '/sharebab',
        element: <ShareBab />,
        footer: true,
        name: '밥약 생성_링크 공유하기',
        title: '밥약 만들기',
    },
    {
        path: '/payment',
        element: <Payment />,
        footer: true,
        name: '송금 및 보은하기',
        title: '송금 및 보은하기',
    },
];

export default routes;
