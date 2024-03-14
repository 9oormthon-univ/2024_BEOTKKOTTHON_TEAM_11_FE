import { BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes.jsx';

const Container = styled.div`
    height: 100%;
`;

function App() {
    return (
        <Container>
            <Router>
                <Routes>{routes}</Routes>
            </Router>
        </Container>
    );
}

export default App;
