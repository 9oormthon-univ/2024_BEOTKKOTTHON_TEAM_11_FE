import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50px;
    padding: 17px;
    border-radius: 8px;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 8px;

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

const Item = styled.div``;

const TextInput = ({
    placeholder,
    onInput,
    value,
    textHidden,
    additionalItem,
}) => {
    const inputType = textHidden ? 'password' : 'text';
    return (
        <Container>
            <Input
                type={inputType}
                placeholder={placeholder}
                onInput={onInput}
                value={value}
            />
            <Item>{additionalItem}</Item>
        </Container>
    );
};

export default TextInput;
