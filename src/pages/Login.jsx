import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice.js';
import { Link } from 'react-router-dom';

import RiceBalloonNoTailImage from '../assets/images/rice_balloon_no_tail.svg';
import TextInput from '../components/TextInput.jsx';
import BlockButton from '../components/BlockButton.jsx';
import { useState } from 'react';
import PasswordEyeButton from '../components/PasswordEyeButton.jsx';
import InputErrorText from '../components/InputErrorText.jsx';

const Container = styled.div`
    padding: 0 31px;
`;

const RiceBalloon = styled.img`
    left: -80px;
    height: 269px;
    position: relative;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #fe5858;
`;

const Subtitle = styled.p`
    font-size: 18px;
`;

const Title = styled.p`
    font-size: 32px;
`;

const Form = styled.div`
    margin-top: 23px;
    display: flex;
    flex-direction: column;
    gap: 13px;
`;

const ButtonContainer = styled.div`
    margin-top: 91px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 55px;
`;

const RegisterText = styled.p`
    color: #d64949;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.02em;

    & > a {
        margin-left: 10px;
        font-weight: 600;
        text-decoration: none;
    }
`;

const Login = ({}) => {
    const dispatch = useDispatch();
    const [fieldHidden, setFieldHidden] = useState(true);
    const [errorText, setErrorText] = useState('');

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    function onLoginClick() {
        alert(`id: ${id}\npassword: ${password}`);

        if (password !== '1111') {
            setErrorText('비밀번호가 틀렸습니다');
        } else {
            setErrorText('');
        }

        // dispatch(
        //     login({
        //         access_token: 'token111',
        //         refresh_token: 'token222',
        //         name: '이츠타임',
        //     })
        // );
    }

    return (
        <Container>
            <RiceBalloon src={RiceBalloonNoTailImage} />
            <TextContainer>
                <Subtitle>지금 무슨시간?</Subtitle>
                <Title>잇츠타임!!</Title>
            </TextContainer>
            <Form>
                <TextInput
                    value={id}
                    onInput={(event) => setId(event.target.value)}
                    placeholder="아이디 또는 이메일을 입력해주세요"
                />
                <TextInput
                    value={password}
                    onInput={(event) => setPassword(event.target.value)}
                    placeholder="비밀번호를 입력해주세요"
                    additionalItem={
                        <PasswordEyeButton
                            value={fieldHidden}
                            onClick={() => setFieldHidden((state) => !state)}
                        />
                    }
                    textHidden={fieldHidden}
                />
                <InputErrorText text={errorText} />
            </Form>
            <ButtonContainer>
                <BlockButton text="로그인" onClick={onLoginClick} />
                <RegisterText>
                    아직 회원이 아니신가요?
                    <Link to="/register">회원가입</Link>
                </RegisterText>
            </ButtonContainer>
        </Container>
    );
};

export default Login;
