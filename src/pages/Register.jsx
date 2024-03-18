import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput.jsx';
import MiniButton from '../components/MiniButton.jsx';
import BlockButton from '../components/BlockButton.jsx';
import PasswordEyeButton from '../components/PasswordEyeButton.jsx';
import InputErrorText from '../components/InputErrorText.jsx';
import classNames from 'classnames';

const Container = styled.div`
    padding: 0 31px;

    overflow: hidden;
`;

const PageHeader = styled.div`
    margin-top: 281px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    color: #fe5858;
`;

const PageIndicator = styled.div`
    display: flex;
    gap: 13px;
`;

const Dot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(
        90deg,
        rgba(254, 88, 88, 1) 0%,
        rgba(254, 88, 88, 1) 50%,
        rgba(255, 246, 246, 1) 50.1%,
        rgba(255, 246, 246, 1) 100%
    );
    background-size: 28px;
    background-position: 100% 0px;
    transition: background-position 0.3s ease;

    &.active {
        background-position: 0% 0px;
    }
`;

const FormContainer = styled.div`
    width: 100%;
    height: 176px;
    margin-top: 23px;
    margin-bottom: 56px;
    overflow: hidden;
`;

const Form = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 13px;

    transition: transform 0.5s ease;
`;

const LeftForm = styled(Form)`
    transform: translateX(-390px);

    &.visible {
        transform: translateX(0%);
    }
`;

const RightForm = styled(Form)`
    top: -100%;
    transform: translateX(390px);

    &.visible {
        transform: translateX(0%);
    }
`;

const Register = ({}) => {
    const navigate = useNavigate();
    const [fieldAHidden, setFieldAHidden] = useState(true);
    const [fieldBHidden, setFieldBHidden] = useState(true);

    const [isNextPage, setNextPage] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailCode, setEmailCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [passwordCheckErrorText, setPasswordCheckErrorText] = useState('');

    const onNextPageClick = (event) => {
        if (isNextPage) {
            alert(
                `name: ${name}\neamil: ${email}\nemail code:${emailCode}\npassword:${password}\npassword check: ${passwordCheck}`
            );
            navigate('/');
        } else {
            setNextPage(true);
        }
    };

    const onPasswordInput = (event) => {
        setPassword(event.target.value);

        if (passwordCheck) {
            if (event.target.value !== passwordCheck) {
                setPasswordErrorText('비밀번호가 틀렸습니다');
                setPasswordCheckErrorText('비밀번호가 틀렸습니다');
            } else {
                setPasswordErrorText('');
                setPasswordCheckErrorText('');
            }
        }
    };

    const onPasswordCheckInput = (event) => {
        setPasswordCheck(event.target.value);

        if (password !== event.target.value) {
            setPasswordErrorText('비밀번호가 틀렸습니다');
            setPasswordCheckErrorText('비밀번호가 틀렸습니다');
        } else {
            setPasswordErrorText('');
            setPasswordCheckErrorText('');
        }
    };

    return (
        <Container>
            <PageHeader>
                회원가입
                <PageIndicator>
                    <Dot className="active" />
                    <Dot className={classNames({ active: isNextPage })} />
                </PageIndicator>
            </PageHeader>
            <FormContainer>
                <LeftForm className={classNames({ visible: !isNextPage })}>
                    <TextInput
                        value={name}
                        onInput={(event) => setName(event.target.value)}
                        placeholder="이름을 입력해주세요"
                    />
                    <TextInput
                        value={email}
                        onInput={(event) => setEmail(event.target.value)}
                        placeholder="이메일을 작성해주세요"
                        additionalItem={<MiniButton text="인증" />}
                    />
                    <TextInput
                        value={emailCode}
                        onInput={(event) => setEmailCode(event.target.value)}
                        placeholder="이메일 인증 번호를 입력해주세요"
                        additionalItem={<MiniButton text="확인" />}
                    />
                </LeftForm>
                <RightForm className={classNames({ visible: isNextPage })}>
                    <TextInput
                        value={password}
                        onInput={onPasswordInput}
                        placeholder="비밀번호를 입력해주세요"
                        additionalItem={
                            <PasswordEyeButton
                                value={fieldAHidden}
                                onClick={() =>
                                    setFieldAHidden((state) => !state)
                                }
                            />
                        }
                        textHidden={fieldAHidden}
                    />
                    <InputErrorText text={passwordErrorText} />
                    <TextInput
                        value={passwordCheck}
                        onInput={onPasswordCheckInput}
                        placeholder="비밀번호를 다시 입력해주세요"
                        additionalItem={
                            <PasswordEyeButton
                                value={fieldBHidden}
                                onClick={() =>
                                    setFieldBHidden((state) => !state)
                                }
                            />
                        }
                        textHidden={fieldBHidden}
                    />
                    <InputErrorText text={passwordCheckErrorText} />
                </RightForm>
            </FormContainer>

            <BlockButton text="회원가입" onClick={onNextPageClick} rightArrow />
        </Container>
    );
};

export default Register;
