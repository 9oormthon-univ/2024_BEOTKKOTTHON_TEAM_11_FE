import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import routes from './routes.jsx';
import store from './redux/store.js';

const Container = styled.div`
    height: 100%;
`;

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Router>
                    <Routes>{routes}</Routes>
                </Router>
            </Container>
        </Provider>
    );
}

export default App;
