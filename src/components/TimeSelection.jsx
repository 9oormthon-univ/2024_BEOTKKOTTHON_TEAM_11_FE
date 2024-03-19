import classNames from 'classnames';
import styled from 'styled-components';

const Item = styled.div`
    position: relative;

    opacity: 0;
    transition: opacity 0.1s;

    touch-action: none;
    user-select: none;
    pointer-events: none;

    background-color: #0fa8665f;

    &.visible {
        opacity: 1;
    }

    &.remove {
        background-color: #ff171780;
    }
`;

const TimeSelection = ({ selectionMode, position1, position2 }) => {
    const startRow = position1[1] < position2[1] ? position1[1] : position2[1];
    const startColumn =
        position1[0] < position2[0] ? position1[0] : position2[0];
    const endRow = position1[1] > position2[1] ? position1[1] : position2[1];
    const endColumn = position1[0] > position2[0] ? position1[0] : position2[0];

    return (
        <Item
            style={{
                gridRowStart: startRow + 1,
                gridRowEnd: endRow + 2,
                gridColumnStart: startColumn + 1,
                gridColumnEnd: endColumn + 2,
            }}
            className={classNames({
                visible: selectionMode !== null,
                remove: selectionMode === false,
            })}
        />
    );
};

export default TimeSelection;
