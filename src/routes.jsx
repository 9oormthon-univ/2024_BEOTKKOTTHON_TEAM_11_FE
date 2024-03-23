import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Sitemap from './pages/Sitemap.jsx';
import FinishBab from './pages/FinishBab.jsx';
import ConfirmBab from './pages/ConfirmBab.jsx';
import WaitBab from './pages/WaitBab.jsx';
import PendingEvent from './pages/PendingEvent.jsx';
import CreateEvent from './pages/CreateEvent.jsx';
import SuccessRegister from './pages/SuccessRegister.jsx';
import ShareBab from './pages/ShareBab.jsx';
import Payment from './pages/FinishedEvent.jsx';
import ScheduledEvent from './pages/ScheduledEvent.jsx';
import Logout from './pages/Logout.jsx';
import Intro from './pages/Intro.jsx';
import JoinEvent from './pages/JoinEvent.jsx';
const routes = [
    {
        path: '/',
        element: <Intro />,
        logo: false,
        previous: false,
        footer: false,
        name: '소개페이지',
    },
    {
        path: '/sitemap',
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
        path: '/event/:eventId/pending',
        element: <PendingEvent />,
        footer: true,
        title: '대기중인 밥약',
        previous: '/events/scheduled',

        name: '대기중인 밥약',
        samplePath: '/event/1/pending',

        customTitle: true,
    },
    {
        path: '/event/:eventId/scheduled',
        element: <ScheduledEvent />,
        footer: true,
        title: '확정된 밥약',
        previous: '/events/scheduled',

        name: '확정된 밥약',
        samplePath: '/event/1/scheduled',

        customTitle: true,
    },
    {
        path: '/event/create',
        element: <CreateEvent />,
        footer: true,
        title: '밥약 만들기',
        previous: '/events/scheduled',

        name: '밥약 생성하기',
    },
    {
        path: '/invite/:uuid',
        element: <JoinEvent />,
        footer: true,
        title: '밥약 만들기',
        previous: '/events/scheduled',

        name: '밥약 참가하기',
        samplePath: '/invite/85e61cd0-59e2-44e6-b89c-79ddc248ae9c',
    },
    {
        path: '/events/scheduled',
        element: <ConfirmBab />,
        footer: true,
        name: '확정된 밥약 목록',
        previous: false,
    },
    {
        path: '/events/pending',
        element: <WaitBab />,
        footer: true,
        name: '대기중인 밥약 목록',
        previous: false,
    },
    {
        path: '/events/result',
        element: <FinishBab />,
        footer: true,
        name: '종료된 밥약 목록',
        previous: false,
    },
    {
        path: '/register/success',
        element: <SuccessRegister />,
        logo: false,
        previous: false,
        name: '회원가입 완료',
    },
    {
        path: '/event/create/result',
        element: <ShareBab />,
        footer: true,
        previous: '/events/scheduled',
        title: '밥약 만들기',

        name: '밥약 생성 결과',
        samplePath:
            '/event/create/result?uuid=85e61cd0-59e2-44e6-b89c-79ddc248ae9c',
    },
    {
        path: '/event/:eventId/result',
        element: <Payment />,
        footer: true,
        title: '송금 및 보은하기',
        previous: '/events/scheduled',

        name: '종료된 밥약',
        samplePath: '/event/1/result',
    },
];

export default routes;
