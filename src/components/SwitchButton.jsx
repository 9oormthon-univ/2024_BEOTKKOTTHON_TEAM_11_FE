import classNames from 'classnames';
import styled from 'styled-components';

const Container = styled.div`
    padding: 6px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fe5858;

    gap: 8px;
`;

const Button = styled.button`
    padding: 4px;
    border: 0;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-grow: 1;

    background-color: #fe5858;
    color: #fff6f6;

    transition: background-color 0.2s;

    cursor: pointer;

    &:hover {
        background-color: #ff7272;
    }

    &.selected {
        background-color: #ffffff;
        color: #fe5858;

        &:hover {
            background-color: #ffe6e6;
        }
    }
`;

const SwitchButton = ({ items, value, onChange }) => {
    const elements = items.map((item) => (
        <Button
            key={item.value}
            onClick={(event) => onChange(item.value)}
            className={classNames({ selected: value === item.value })}
        >
            {item.text}
        </Button>
    ));
    return <Container>{elements}</Container>;
};

export default SwitchButton;
