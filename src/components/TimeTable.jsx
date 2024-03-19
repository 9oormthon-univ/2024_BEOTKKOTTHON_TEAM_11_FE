import { useEffect, useRef, useState } from 'react';
import TimeItem from './TimeItem.jsx';
import styled from 'styled-components';
import TimeSelection from './TimeSelection.jsx';
import { useImmer } from 'use-immer';

const Container = styled.div`
    width: 100%;
    margin: 32px 0;
    display: grid;
    grid-template-columns: repeat(${(props) => props.$column}, 1fr);

    touch-action: none;
    user-select: none;
`;

const COLUMN = 5;
const ROW = 48;

function clampNumber(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

function convertPositionToGrid(table, itemX, itemY) {
    const { x, y, width, height } = table.current.getBoundingClientRect();

    const innerX = itemX - x;
    const innerY = itemY - y;

    const itemWidth = width / COLUMN;
    const itemHeight = height / ROW;

    const gridX = parseInt(innerX / itemWidth);
    const gridY = parseInt(innerY / itemHeight);

    return [clampNumber(gridX, 0, COLUMN - 1), clampNumber(gridY, 0, ROW - 1)];
}

const TimeTable = ({}) => {
    const ref = useRef(null);
    const [data, setData] = useImmer(
        Array(COLUMN)
            .fill(null)
            .map((item, index) => ({
                date: index,
                items: Array(ROW).fill(false),
            }))
    );

    const [selectionMode, setSelectionMode] = useState(null);
    const [startPosition, setStartPosition] = useState([0, 0]);
    const [endPosition, setEndPosition] = useState([0, 0]);

    useEffect(() => {
        if (ref && ref.current) {
            document.addEventListener('mousemove', onItemMouseMove);
            document.addEventListener('mouseup', onItemMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', onItemMouseMove);
            document.removeEventListener('mouseup', onItemMouseUp);
        };
    }, [ref, selectionMode, startPosition, endPosition]);

    const onItemMouseDown = (event) => {
        const itemX = event.clientX;
        const itemY = event.clientY;

        const position = convertPositionToGrid(ref, itemX, itemY);

        setStartPosition(position);
        setEndPosition(position);

        setSelectionMode(!data[position[0]].items[position[1]]);

        event.preventDefault();
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
        const itemX = event.changedTouches[0].clientX;
        const itemY = event.changedTouches[0].clientY;

        const position = convertPositionToGrid(ref, itemX, itemY);

        setStartPosition(position);
        setEndPosition(position);

        setSelectionMode(!data[position[0]].items[position[1]]);
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
                for (let item = startY; item <= endY; item++) {
                    state[date].items[item] = selectionMode;
                }
            }
        });
    };

    const elements = [];

    for (let i = 0; i < COLUMN; i++) {
        for (let j = 0; j < ROW; j++) {
            let text = '';

            if (i == 0) {
                const hour = parseInt(j / 2);
                const minute = j % 2 === 1 ? '30' : '00';
                text = `${hour.toString().padStart(2, '0')}:${minute}`;
            }

            elements.push(
                <TimeItem
                    key={j * COLUMN + i}
                    text={text}
                    style={{ gridColumn: i + 1, gridRow: j + 1 }}
                    active={data[i].items[j]}
                />
            );
        }
    }

    return (
        <Container
            ref={ref}
            $column={COLUMN}
            onMouseDown={onItemMouseDown}
            onMouseUp={onItemMouseUp}
            onMouseMove={onItemMouseMove}
            onTouchStart={onItemTouchStart}
            onTouchEnd={onItemTouchEnd}
            onTouchMove={onItemTouchMove}
        >
            <TimeSelection
                position1={startPosition}
                position2={endPosition}
                selectionMode={selectionMode}
            />
            {elements}
        </Container>
    );
};

export default TimeTable;
