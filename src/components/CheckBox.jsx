import classNames from 'classnames';
import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.div`
    padding: 16px 8px;
    display: flex;
    align-items: center;
    color: #fe5858;

    gap: 12px;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
`;

const Input = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffffff;
    color: #fe5858;

    transition: background-color 0.2s;

    cursor: pointer;

    &:hover {
        background-color: #efefef;
    }

    & > svg {
        stroke-width: 1;
        opacity: 0;

        transition: opacity 0.1s;

        &.active {
            opacity: 1;
        }
    }
`;

const CheckBox = ({ icon, text, value, onChange }) => {
    const onClick = (event) => {
        onChange(event, !value);
    };

    return (
        <Container>
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
            <Input onClick={onClick}>
                <BsCheckLg className={classNames({ active: value })} />
            </Input>
        </Container>
    );
};

export default CheckBox;
