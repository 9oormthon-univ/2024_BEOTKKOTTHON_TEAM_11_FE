import { Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Sitemap from './pages/Sitemap.jsx';
import WaitBab from './pages/WaitBab.jsx';

const routes = [
    { path: '/', element: <Sitemap /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/waitbab', element: <WaitBab /> },
];

const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
));

export default elements;
