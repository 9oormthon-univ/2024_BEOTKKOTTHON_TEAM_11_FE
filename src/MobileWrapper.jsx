import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes.jsx';
import { IoIosArrowBack } from 'react-icons/io';

import ServiceLogoImage from './assets/images/service_logo.svg';

const Container = styled.div`
    max-width: 390px;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow: auto;
    box-shadow: 0px 0px 32px #0000002f;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 23px;
`;

const BackButton = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    color: #fe5858;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    & > svg {
        width: 24px;
        height: 24px;
    }

    &:hover {
        background-color: #0000002f;
    }
`;

const Logo = styled.img`
    height: 40px;
    cursor: pointer;
`;

const Footer = styled.div`
    position: absolute;
    max-width: 390px;
    width: 100%;
    height: 62px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #54bd6b3f;
    box-shadow: 0px -15px 25px #0000000a;

    /* state로 toggle 기능 구현전엔 잠시 비활성화 */
    display: none;
`;

const MobileWrapper = ({}) => {
    return (
        <Container>
            <Header>
                <BackButton>
                    <IoIosArrowBack />
                </BackButton>
                <Logo src={ServiceLogoImage} />
            </Header>
            <Router>
                <Routes>{routes}</Routes>
            </Router>
            <Footer>하단 Footer -- 버튼 들어갈 곳</Footer>
        </Container>
    );
};

export default MobileWrapper;
