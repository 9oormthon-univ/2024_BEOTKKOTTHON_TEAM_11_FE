import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice.js';
import { Link, useNavigate } from 'react-router-dom';

import RiceBalloonNoTailImage from '../assets/images/rice_balloon_no_tail.svg';
import TextInput from '../components/TextInput.jsx';
import BlockButton from '../components/BlockButton.jsx';
import { useEffect, useState } from 'react';
import PasswordEyeButton from '../components/PasswordEyeButton.jsx';
import InputErrorText from '../components/InputErrorText.jsx';
import { postLogin } from '../api/user.js';

const Container = styled.div`
    padding: 0 31px;
`;

const PageHeader = styled.div`
    height: 280px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const RiceBalloon = styled.img`
    top: 40px;
    left: -100px;
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
    display: flex;
    flex-direction: column;
    gap: 13px;
`;

const ButtonContainer = styled.div`
    margin: 48px 0;
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fieldHidden, setFieldHidden] = useState(true);
    const [errorText, setErrorText] = useState('');

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    async function onLoginClick() {
        if (id === '') {
            alert('아이디를 입력하세요.');
            return;
        }

        if (password === '') {
            alert('비밀번호를 입력하세요.');
            return;
        }

        let response;

        try {
            response = await postLogin({ id, password });
        } catch (e) {
            setErrorText('비밀번호가 틀렸습니다');
            return;
        }

        dispatch(
            login({
                accessToken: response.accessToken,
                id,
            })
        );

        alert(`${id}님 환영합니다!`);
        navigate('/');
    }

    return (
        <Container>
            <PageHeader>
                <RiceBalloon src={RiceBalloonNoTailImage} />
                <TextContainer>
                    <Subtitle>지금 무슨시간?</Subtitle>
                    <Title>잇츠타임!!</Title>
                </TextContainer>
            </PageHeader>
            <Form>
                <TextInput
                    value={id}
                    onInput={(event) => setId(event.target.value)}
                    placeholder="아이디 또는 이메일을 입력해주세요"
                />
                <TextInput
                    value={password}
                    onInput={(event) => {
                        setPassword(event.target.value);
                        setErrorText('');
                    }}
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
