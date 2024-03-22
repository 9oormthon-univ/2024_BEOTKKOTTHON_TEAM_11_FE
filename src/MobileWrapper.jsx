import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes.jsx';
import { IoIosArrowBack } from 'react-icons/io';

import ServiceLogoImage from './assets/images/service_logo.svg';
import ServiceLogoCompactImage from './assets/images/rice_balloon_no_tail.svg';
import RiceBalloonButton from './assets/images/rice_balloon_button.svg';
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

const Title = styled.p`
    font-size: 22px;
    font-weight: 700;

    color: #fe5858;
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
    min-width: 360px;
    width: 100%;
    height: 62px;
    bottom: 0;
    left: 50%;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 1);

    font-weight: 400;
    font-size: 18px;
    box-shadow: 0px -15px 25px 0px rgba(0, 0, 0, 0.04);

    @media screen and (max-width: 360px) {
        left: 0;
        transform: none;
    }

    &.hidden {
        display: none;
    }
`;

const FooterButton = styled(Link)`
    flex-basis: 0;
    flex-grow: 1;

    text-align: center;
    color: rgba(149, 109, 109, 1);
    text-decoration: none;
`;

const FooterRiceButton = styled(Link)`
    padding-bottom: 64px;
`;

const ButtonImage = styled.img``;

const LOGO_DEFAULT = true;
const FOOTER_DEFAULT = false;
const HEADER_TITLE_DEFAULT = null;
const BACKWARD_DEFAULT = '/';

const MobileWrapper = ({}) => {
    const navigate = useNavigate();

    const [showLogo, setLogo] = useState(LOGO_DEFAULT);
    const [showFooter, setFooter] = useState(FOOTER_DEFAULT);
    const [headerTitle, setHeaderTitle] = useState(HEADER_TITLE_DEFAULT);
    const [backwardUrl, setBackwardUrl] = useState(BACKWARD_DEFAULT);

    const location = useLocation();

    useEffect(() => {
        const find = routes.find((item) => item.path === location.pathname);

        if (find) {
            setLogo(find.logo ?? LOGO_DEFAULT);
            setFooter(find.footer ?? FOOTER_DEFAULT);
            setHeaderTitle(find.title ?? HEADER_TITLE_DEFAULT);
            setBackwardUrl(find.previous ?? BACKWARD_DEFAULT);
        } else {
            setLogo(LOGO_DEFAULT);
            setFooter(FOOTER_DEFAULT);
            setHeaderTitle(HEADER_TITLE_DEFAULT);
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
                    <Title>{headerTitle}</Title>
                    <Logo
                        src={
                            headerTitle === null
                                ? ServiceLogoImage
                                : ServiceLogoCompactImage
                        }
                        className={classNames({
                            hidden: !showLogo,
                            compact: headerTitle !== null,
                        })}
                    />
                </Header>
                <Outlet />
            </Content>
            <Footer className={classNames({ hidden: !showFooter })}>
                <FooterButton to="/">이츠타임?</FooterButton>
                <FooterRiceButton to="/">
                    <ButtonImage src={RiceBalloonButton} />
                </FooterRiceButton>
                <FooterButton to="/logout">로그아웃</FooterButton>
            </Footer>
        </Container>
    );
};

export default MobileWrapper;
