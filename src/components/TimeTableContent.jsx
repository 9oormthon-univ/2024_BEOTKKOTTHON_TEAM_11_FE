import { useEffect, useRef, useState } from 'react';
import TimeItem from './TimeItem.jsx';
import styled from 'styled-components';
import TimeSelectionArea from './TimeSelectionArea.jsx';
import { useImmer } from 'use-immer';

const Container = styled.div`
    flex-grow: 1;
    display: grid;
    gap: 1px 1px;
    grid-template-columns: repeat(${(props) => props.$column}, 1fr);

    touch-action: none;
    user-select: none;
`;

function clampNumber(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

const TimeTableContent = ({
    column,
    row,
    maxIndex,
    readOnly,
    showCheck,
    onChange,
    value,
}) => {
    const ref = useRef(null);
    const [selectionMode, setSelectionMode] = useState(null);
    const [startPosition, setStartPosition] = useState([0, 0]);
    const [endPosition, setEndPosition] = useState([0, 0]);

    useEffect(() => {
        if (ref && ref.current) {
            document.addEventListener('mousemove', onItemMouseMove);
            document.addEventListener('mouseup', onItemMouseUp);
            document.addEventListener('touchend', onItemTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', onItemMouseMove);
            document.removeEventListener('mouseup', onItemMouseUp);
            document.removeEventListener('touchend', onItemTouchEnd);
        };
    }, [ref, selectionMode, startPosition, endPosition]);

    function convertPositionToGrid(table, itemX, itemY) {
        const { x, y, width, height } = table.current.getBoundingClientRect();

        const innerX = itemX - x;
        const innerY = itemY - y;

        const itemWidth = width / column;
        const itemHeight = height / row;

        const gridX = parseInt(innerX / itemWidth);
        const gridY = parseInt(innerY / itemHeight);

        return [
            clampNumber(gridX, 0, column - 1),
            clampNumber(gridY, 0, row - 1),
        ];
    }

    const onItemMouseDown = (event) => {
        event.preventDefault();

        if (readOnly) {
            return;
        }

        const itemX = event.clientX;
        const itemY = event.clientY;

        const position = convertPositionToGrid(ref, itemX, itemY);

        if (position[0] >= maxIndex) {
            return;
        }

        setStartPosition(position);
        setEndPosition(position);

        setSelectionMode(!value[position[0]].items[position[1]]);
    };

    const onItemMouseUp = (event) => {
        if (selectionMode === null) {
            return;
        }

        setSelectionMode(null);
        selectItems();
    };

    const onItemMouseMove = (event) => {
        if (selectionMode === null) {
            return;
        }

        const itemX = event.clientX;
        const itemY = event.clientY;

        const position = convertPositionToGrid(ref, itemX, itemY);

        setEndPosition(position);

        event.preventDefault();
    };

    const onItemTouchStart = (event) => {
        if (readOnly) {
            return;
        }

        const itemX = event.changedTouches[0].clientX;
        const itemY = event.changedTouches[0].clientY;

        const position = convertPositionToGrid(ref, itemX, itemY);

        if (position[0] >= maxIndex) {
            return;
        }

        setSelectionMode(!value[position[0]].items[position[1]]);

        if (position[0] >= maxIndex) {
            return;
        }

        setStartPosition(position);
        setEndPosition(position);
    };

    const onItemTouchEnd = (event) => {
        if (selectionMode === null) {
            return;
        }

        setSelectionMode(null);
        selectItems();
    };

    const onItemTouchMove = (event) => {
        const itemX = event.changedTouches[0].clientX;
        const itemY = event.changedTouches[0].clientY;

        const position = convertPositionToGrid(ref, itemX, itemY);

        setEndPosition(position);
    };

    const selectItems = () => {
        const startX =
            startPosition[0] < endPosition[0]
                ? startPosition[0]
                : endPosition[0];
        const startY =
            startPosition[1] < endPosition[1]
                ? startPosition[1]
                : endPosition[1];
        const endX =
            startPosition[0] > endPosition[0]
                ? startPosition[0]
                : endPosition[0];
        const endY =
            startPosition[1] > endPosition[1]
                ? startPosition[1]
                : endPosition[1];

        for (let date = startX; date <= endX; date++) {
            if (date >= maxIndex) {
                break;
            }

            for (let item = startY; item <= endY; item++) {
                value[date].items[item] = selectionMode ? 1 : 0;
            }
        }

        onChange(value);
    };

    const elements = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            elements.push(
                <TimeItem
                    key={i * column + j}
                    style={{ gridColumn: j + 1, gridRow: i + 1 }}
                    value={value[j]?.items[i]}
                    disabled={j >= maxIndex}
                    showCheck={showCheck}
                />
            );
        }
    }

    return (
        <Container
            ref={ref}
            $column={column}
            onMouseDown={onItemMouseDown}
            onMouseUp={onItemMouseUp}
            onMouseMove={onItemMouseMove}
            onTouchStart={onItemTouchStart}
            onTouchEnd={onItemTouchEnd}
            onTouchMove={onItemTouchMove}
        >
            <TimeSelectionArea
                position1={startPosition}
                position2={endPosition}
                selectionMode={selectionMode}
            />
            {elements}
        </Container>
    );
};

export default TimeTableContent;
