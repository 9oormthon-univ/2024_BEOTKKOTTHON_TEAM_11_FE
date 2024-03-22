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

const TimeTableContent = ({ column, row, disabledRanges, readOnly }) => {
    const ref = useRef(null);
    const [data, setData] = useImmer(
        Array(column)
            .fill(null)
            .map((item, index) => ({
                date: index,
                items: Array(row).fill(0),
            }))
    );
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

        if (disabledRanges.includes(position[0])) {
            return;
        }

        setStartPosition(position);
        setEndPosition(position);

        setSelectionMode(!data[position[0]].items[position[1]]);
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

        if (disabledRanges.includes(position[0])) {
            return;
        }

        setSelectionMode(!data[position[0]].items[position[1]]);

        if (disabledRanges.includes(position[0])) {
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

        setData((state) => {
            for (let date = startX; date <= endX; date++) {
                if (disabledRanges.includes(date)) {
                    continue;
                }
                for (let item = startY; item <= endY; item++) {
                    state[date].items[item] = selectionMode ? 1 : 0;
                }
            }
        });
    };

    const elements = [];

    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            elements.push(
                <TimeItem
                    key={j * column + i}
                    style={{ gridColumn: i + 1, gridRow: j + 1 }}
                    value={data[i].items[j]}
                    disabled={disabledRanges.includes(i)}
                    readOnly={readOnly}
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

TimeTableContent.defaultProps = {
    disabledRanges: [],
};

export default TimeTableContent;
