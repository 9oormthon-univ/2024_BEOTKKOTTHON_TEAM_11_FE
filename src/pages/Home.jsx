import styled from 'styled-components';

const Container = styled.div``;

const Home = ({}) => {
    return (
        <Container>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </Container>
    );
};

export default Home;
