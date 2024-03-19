import classNames from 'classnames';
import styled from 'styled-components';

const Item = styled.div`
    height: 18px;
    border: 1px solid #0000001f;
    display: flex;
    background-color: #ffffff;

    border-top: 1px dashed #0000001f;
    border-bottom: 1px dashed #0000001f;

    transition: background-color 0.1s;

    font-size: 12px;
    align-items: center;
    justify-content: center;
    color: #0000006f;

    touch-action: none;
    user-select: none;

    cursor: default;

    &.active {
        background-color: #0fa866;
    }

    &:nth-child(2n) {
        border-top: 1px solid #0000006f;
    }
`;

const TimeItem = ({
    active,
    text,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    onMouseMove,
    onMouseDown,
    onMouseUp,
    style,
}) => {
    return (
        <Item
            style={style}
            className={classNames({ active })}
            {...{
                onTouchStart,
                onTouchEnd,
                onTouchMove,
                onMouseMove,
                onMouseDown,
                onMouseUp,
            }}
            draggable={false}
        >
            {text}
        </Item>
    );
};

export default TimeItem;
