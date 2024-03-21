import styled from 'styled-components';
import React from 'react'; // React 임포트 추가

const TitleContainer = styled.div`
display: flex;
align-items: center;
margin-left: 40px;
color: #FE5858;
`;

const Title = styled.div`
    width: 108px;
    height: 50px;
    font-weight: 700;
    font-size: 18px;
    color: #FE5858;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 329px;
    height: 50px;
    padding: 17px;
    border-radius: 8px;
    font-weight: 400;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    gap: 8px;

    color: #d64949;

    background-color: #fff6f6;
`;

const Input = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: #fff6f6;

    &::placeholder {
        color: #9a7b7b;
    }
`;

const LinkBox = ({
    text,
    placeholder,
    onInput,
    value,
    textHidden,
    icon: Icon // Icon으로 이름 변경
}) => {
    const inputType = textHidden ? 'password' : 'text';
    return (
    <>
        <TitleContainer>
            {Icon && <Icon size="24px" />}
            <Title>{text}</Title>
        </TitleContainer>
        <Container>
            <Input
                type={inputType}
                placeholder={placeholder}
                onInput={onInput}
                value={value}
            />
        </Container>
    </>
    );
};

export default LinkBox;
