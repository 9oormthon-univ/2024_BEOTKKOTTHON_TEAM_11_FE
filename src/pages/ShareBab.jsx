import React, { useEffect } from 'react';
import riceBalloon from '../assets/images/riceBalloon_notail.png';
import styled from 'styled-components';
import TextboxMini from '../components/TextboxMini.jsx';
import { BsFillShareFill } from 'react-icons/bs';
import ContentHeader from '../components/ContentHeader.jsx';
import TextButton from '../components/TextButton.jsx';
import MiniButton from '../components/MiniButton.jsx';
import { useNavigate, useSearchParams } from 'react-router-dom';

const URL = import.meta.env.VITE_SERVICE_URL;

const Container = styled.div`
    padding: 0 31px;
`;

const LogoDiv = styled.div`
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
`;

const TextDiv = styled.div`
    margin-top: 48px;
`;

const LinkContainer = styled.div`
    margin-top: 40px;
`;

function ShareBab({}) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const link = URL + 'invite/' + searchParams.get('uuid');

    useEffect(() => {
        if (!searchParams.get('uuid')) {
            navigate('/');
        }
    }, [link]);

    const onCopyClick = () => {
        navigator.clipboard.writeText(link).then(() => {
            alert('복사되었습니다!');
        });
    };

    return (
        <Container>
            <LogoDiv>
                <img src={riceBalloon} alt="Rice Balloon" />
            </LogoDiv>
            <TextDiv>
                <TextboxMini text="밥약이 만들어졌어요!!"></TextboxMini>
                <TextboxMini text="하단의 링크를 통해 공유해보아요!!"></TextboxMini>
            </TextDiv>
            <LinkContainer>
                <ContentHeader
                    icon={<BsFillShareFill />}
                    text="밥약 공유 링크"
                />
                <TextButton
                    value={link}
                    additionalItem={
                        <MiniButton text="복사" onClick={onCopyClick} />
                    }
                    text="밥약 공유 링크"
                />
            </LinkContainer>
        </Container>
    );
}

export default ShareBab;
