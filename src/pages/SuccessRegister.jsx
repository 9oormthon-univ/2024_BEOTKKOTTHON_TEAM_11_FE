import React from 'react';
import { useNavigate } from 'react-router-dom';
import riceBalloon from '../assets/images/riceBalloon_notail.png';
import styled from 'styled-components';
import TextboxMini from '../components/TextboxMini.jsx';
import CustomButton from '../components/LoginButton.jsx';

const LogoDiv = styled.div`
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
`;
const Text1 = styled.div`
    color: #fe5858;
    font-weight: 600;
    width: 205px;
    height: 42px;
    font-size: 32px;
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 46px;
    margin-left: auto;
    margin-right: auto;
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
`;

const TextDiv = styled.div`
    margin-top: 48px;
`;

function SuccessRegister() {
    const navigate = useNavigate(); // useNavigate 훅 사용
    return (
        <>
            <LogoDiv>
                <img src={riceBalloon} alt="Rice Balloon" />
            </LogoDiv>
            <Text1>회원가입 완료!!</Text1>
            <TextDiv>
                <TextboxMini text="회원가입이 완료되었습니다."></TextboxMini>
                <TextboxMini text="이츠타임과 함께"></TextboxMini>
                <TextboxMini text="편하고 행복한 밥약 만들러 가볼까요?"></TextboxMini>
            </TextDiv>
            <ButtonDiv>
                <CustomButton
                    name="홈으로 이동"
                    variant="home"
                    onClick={() => navigate('/events/scheduled')}
                ></CustomButton>
                <CustomButton
                    name="로그인"
                    variant="login"
                    onClick={() => navigate('/login')}
                ></CustomButton>
            </ButtonDiv>
        </>
    );
}

export default SuccessRegister;
