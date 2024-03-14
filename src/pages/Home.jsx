import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectIsLoggedIn, selectName } from '../redux/userSlice.js';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Home = ({}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userName = useSelector(selectName);

    function getLoginText() {
        if (isLoggedIn) {
            return `${userName}님, 안녕하세요!`;
        } else {
            return '아직 로그인 하지 않았습니다.';
        }
    }

    return (
        <Container>
            <p>{getLoginText()}</p>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </Container>
    );
};

export default Home;
