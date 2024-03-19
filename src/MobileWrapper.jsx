import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes.jsx';
import { IoIosArrowBack } from 'react-icons/io';

import ServiceLogoImage from './assets/images/service_logo.svg';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 23px;
`;

const Content = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 100vh;
    overflow: auto;
    box-shadow: 0px 0px 32px #0000002f;
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

    &.hidden {
        visibility: hidden;
    }

    &:hover {
        background-color: #0000002f;
    }
`;

const Logo = styled.img`
    height: 40px;
    cursor: pointer;

    &.hidden {
        visibility: hidden;
    }
`;

const Footer = styled.div`
    position: fixed;
    max-width: 390px;
    width: 100%;
    height: 62px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #54bd6b3f;
    box-shadow: 0px -15px 25px #0000000a;

    &.hidden {
        display: none;
    }
`;

const LOGO_DEFAULT = true;
const FOOTER_DEFAULT = false;
const BACKWARD_DEFAULT = '/';

const MobileWrapper = ({}) => {
    const navigate = useNavigate();

    const [showLogo, setLogo] = useState(LOGO_DEFAULT);
    const [showFooter, setFooter] = useState(FOOTER_DEFAULT);
    const [backwardUrl, setBackwardUrl] = useState(BACKWARD_DEFAULT);

    const location = useLocation();

    useEffect(() => {
        const find = routes.find((item) => item.path === location.pathname);

        if (find) {
            setLogo(find.logo ?? LOGO_DEFAULT);
            setFooter(find.footer ?? FOOTER_DEFAULT);
            setBackwardUrl(find.previous ?? BACKWARD_DEFAULT);
        } else {
            setLogo(LOGO_DEFAULT);
            setFooter(FOOTER_DEFAULT);
            setBackwardUrl(BACKWARD_DEFAULT);
        }
    }, [location]);

    const onBackButtonClick = (event) => {
        console.log(backwardUrl);
        navigate(backwardUrl);
    };

    return (
        <Container>
            <Content>
                <Header>
                    <BackButton
                        onClick={onBackButtonClick}
                        className={classNames({
                            hidden: backwardUrl === false,
                        })}
                    >
                        <IoIosArrowBack />
                    </BackButton>
                    <Logo
                        src={ServiceLogoImage}
                        className={classNames({ hidden: !showLogo })}
                    />
                </Header>
                <Outlet />
            </Content>
            <Footer className={classNames({ hidden: !showFooter })}>
                하단 Footer -- 버튼 들어갈 곳
            </Footer>
        </Container>
    );
};

export default MobileWrapper;
