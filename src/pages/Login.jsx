import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice.js';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Login = ({}) => {
    const dispatch = useDispatch();

    function onLoginClick() {
        // redux를 이용한 로그인

        dispatch(
            login({
                access_token: 'token111',
                refresh_token: 'token222',
                name: '이츠타임',
            })
        );

        console.log();
    }

    return (
        <Container>
            Login
            <br />
            <Link to="/">Home</Link>
            <Link to="/" onClick={onLoginClick}>
                로그인하기
            </Link>
        </Container>
    );
};

export default Login;
