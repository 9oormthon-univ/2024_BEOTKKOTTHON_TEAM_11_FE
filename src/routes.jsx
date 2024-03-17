import { Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Sitemap from './pages/Sitemap.jsx';

const routes = [
    { path: '/', element: <Sitemap /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
];

const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
));

export default elements;
