import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput.jsx';
import MiniButton from '../components/MiniButton.jsx';
import BlockButton from '../components/BlockButton.jsx';
import PasswordEyeButton from '../components/PasswordEyeButton.jsx';
import InputErrorText from '../components/InputErrorText.jsx';

const Container = styled.div`
    padding: 0 31px;
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
    background-color: #fe5858;
`;

const Form = styled.div`
    height: 176px;
    margin-top: 23px;
    margin-bottom: 56px;
    display: flex;
    flex-direction: column;
    gap: 13px;
`;

const Register = ({}) => {
    const [fieldAHidden, setFieldAHidden] = useState(true);
    const [fieldBHidden, setFieldBHidden] = useState(true);

    return (
        <Container>
            <PageHeader>
                회원가입
                <PageIndicator>
                    <Dot />
                    <Dot />
                </PageIndicator>
            </PageHeader>
            <Form>
                <TextInput placeholder="이름을 입력해주세요" />
                <TextInput
                    placeholder="이메일을 작성해주세요"
                    additionalItem={<MiniButton text="인증" />}
                />
                <TextInput
                    placeholder="이메일 인증 번호를 입력해주세요"
                    additionalItem={<MiniButton text="확인" />}
                />
            </Form>
            {/* <Form>
                <TextInput
                    placeholder="비밀번호를 입력해주세요"
                    additionalItem={
                        <PasswordEyeButton
                            value={fieldAHidden}
                            onClick={() => setFieldAHidden((state) => !state)}
                        />
                    }
                    textHidden={fieldAHidden}
                />
                <InputErrorText text="비밀번호가 틀렸습니다" />
                <TextInput
                    placeholder="비밀번호를 다시 입력해주세요"
                    additionalItem={
                        <PasswordEyeButton
                            value={fieldBHidden}
                            onClick={() => setFieldBHidden((state) => !state)}
                        />
                    }
                    textHidden={fieldBHidden}
                />
                <InputErrorText text="비밀번호가 틀렸습니다" />
            </Form> */}
            <BlockButton text="회원가입" rightArrow />
        </Container>
    );
};

export default Register;
