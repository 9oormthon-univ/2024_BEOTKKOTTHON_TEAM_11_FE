import { Provider } from 'react-redux';
import styled from 'styled-components';
import routes from './routes.jsx';
import store from './redux/store.js';
import MobileWrapper from './MobileWrapper.jsx';

const Container = styled.div`
    height: 100%;
`;

function App() {
    return (
        <Provider store={store}>
            <Container>
                <MobileWrapper />
            </Container>
        </Provider>
    );
}

export default App;
