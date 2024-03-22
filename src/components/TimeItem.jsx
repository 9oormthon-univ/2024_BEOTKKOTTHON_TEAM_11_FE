import classNames from 'classnames';
import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';

const Item = styled.div`
    height: 15px;
    border-radius: 2px;
    display: flex;

    background-color: rgba(
        ${(props) => {
            if (props.$value === 0) {
                return '245, 223, 223, 1';
            } else {
                return `255, 88, 88, ${props.$value}`;
            }
        }}
    );

    transition: background-color 0.1s;

    font-size: 12px;
    align-items: center;
    justify-content: center;
    color: #0000006f;

    touch-action: none;
    user-select: none;

    cursor: default;

    &.disabled {
        background-color: rgba(255, 246, 246, 1);
    }

    & > svg {
        color: #ffffff;
    }
`;

const TimeItem = ({ value, style, readOnly, disabled }) => {
    return (
        <Item style={style} $value={value} className={classNames({ disabled })}>
            {readOnly && value >= 1 ? <BsCheckLg /> : null}
        </Item>
    );
};

export default TimeItem;
