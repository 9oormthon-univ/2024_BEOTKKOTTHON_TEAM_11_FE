import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './redux/store.js';
import MobileWrapper from './MobileWrapper.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './routes.jsx';

const Container = styled.div`
    height: 100%;
`;

function App() {
    const elements = routes.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
    ));

    return (
        <Provider store={store}>
            <Container>
                <Router>
                    <Routes>
                        <Route path="/" element={<MobileWrapper />}>
                            {elements}
                        </Route>
                    </Routes>
                </Router>
            </Container>
        </Provider>
    );
}

export default App;
