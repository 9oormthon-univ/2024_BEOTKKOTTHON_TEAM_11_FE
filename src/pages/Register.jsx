import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput.jsx';
import MiniButton from '../components/MiniButton.jsx';
import BlockButton from '../components/BlockButton.jsx';
import PasswordEyeButton from '../components/PasswordEyeButton.jsx';
import InputErrorText from '../components/InputErrorText.jsx';
import classNames from 'classnames';
import {
    postEmailConfirmation,
    postEmailVerification,
    postRegister,
} from '../api/user.js';

const Container = styled.div`
    padding: 0 31px;
    overflow: hidden;
`;

const PageHeader = styled.div`
    height: 280px;
    margin-bottom: 24px;
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
    /* height: 176px; */
    height: 246px;
    margin-bottom: 56px;
    overflow: hidden;
`;

const Form = styled.div`
    width: 100%;
    height: 140px;
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
    top: -140px;
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
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [emailCode, setEmailCode] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [passwordCheckErrorText, setPasswordCheckErrorText] = useState('');

    const firstFormCheck = () => {
        if (name === '') {
            alert('이름을 입력하세요.');
            return false;
        }

        if (organization === '') {
            alert('대학교 이름을 입력하세요.');
            return false;
        }

        if (!email) {
            alert('이메일을 입력하세요.');
            return false;
        }

        if (!emailVerified) {
            alert('이메일을 인증하세요.');
            return false;
        }

        return true;
    };

    const secondFormCheck = async () => {
        if (password === '') {
            alert('비밀번호를 입력하세요.');
            return false;
        }

        if (passwordCheck === '') {
            alert('비밀번호 확인을 입력하세요.');
            return false;
        }

        if (password !== passwordCheck) {
            alert('비밀번호 확인을 틀리게 입력하셨습니다.');
            return false;
        }

        let response;

        try {
            response = await postRegister({
                name,
                id: email,
                password,
            });
        } catch (e) {
            alert('회원 가입 도중 오류가 발생했습니다.');
            return;
        }

        navigate('/register/success');
    };

    const onEmailVerifyButtonClick = async (event) => {
        if (organization === '') {
            alert('대학교를 입력하세요.');
            return false;
        }

        if (email === '') {
            alert('이메일을 입력하세요.');
            return;
        }

        let response;

        try {
            response = await postEmailVerification({ email, organization });
        } catch (e) {
            alert('인증 메일 전송에 실패했습니다.');
            return;
        }

        setEmailSent(true);

        alert(
            '인증 메일을 전송했습니다. 이메일로 전송된 인증 번호를 입력하세요.\n(인증 코드: 1111)'
        );
    };

    const onEmailConfirmButtonClick = async (event) => {
        if (!emailSent) {
            alert('인증 메일을 먼저 전송하세요.');
            return;
        }

        if (emailCode === '') {
            alert(
                `인증 코드를 입력하세요. 인증 코드는 ${email}로 전송되었습니다.`
            );
            return;
        }

        let response;

        try {
            response = await postEmailConfirmation({
                email,
                organization,
                code: emailCode,
            });
        } catch (e) {
            alert('인증 코드가 틀렸습니다.');
            return;
        }

        setEmailVerified(true);

        alert(`${response.email}의 이메일 인증에 성공했습니다.`);
    };

    const onNextPageClick = async (event) => {
        if (isNextPage) {
            await secondFormCheck();
        } else if (firstFormCheck()) {
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
                        value={organization}
                        onInput={(event) => {
                            setOrganization(event.target.value);
                            setEmailSent(false); // 대학 이름을 바꾸면 인증 메일을 무효화
                            setEmailVerified(false); // 대학 이름을 바꾸면 인증을 무효화
                        }}
                        placeholder="대학교를 입력해주세요"
                    />
                    <TextInput
                        value={email}
                        onInput={(event) => {
                            setEmail(event.target.value);
                            setEmailSent(false); // 이메일 주소를 바꾸면 인증 메일을 무효화
                            setEmailVerified(false); // 이메일 주소를 바꾸면 인증을 무효화
                        }}
                        placeholder="이메일을 작성해주세요"
                        additionalItem={
                            <MiniButton
                                text="인증"
                                onClick={onEmailVerifyButtonClick}
                            />
                        }
                    />
                    <TextInput
                        value={emailCode}
                        onInput={(event) => setEmailCode(event.target.value)}
                        placeholder="이메일 인증 번호를 입력해주세요"
                        additionalItem={
                            <MiniButton
                                text="확인"
                                onClick={onEmailConfirmButtonClick}
                            />
                        }
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
