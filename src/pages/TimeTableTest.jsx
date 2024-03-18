// 시간표 테스트 페이지입니다. 기술 테스트 후 나중에 제거 예정

import classNames from 'classnames';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 31px;
`;

const TimeGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2px 2px;
    background-color: #0000007f;
`;

const Item = styled.div`
    height: 30px;
    display: flex;
    background-color: #ffffff;

    &.active {
        background-color: #0fa866;
    }
`;

const TimeItem = ({
    date,
    id,
    active,
    onMouseOver,
    onMouseDown,
    onMouseUp,
}) => {
    return (
        <Item
            className={classNames({ active })}
            onMouseOver={(event) => onMouseOver(date, id, event)}
            onMouseDown={(event) => onMouseDown(date, id, event)}
            onMouseUp={(event) => onMouseUp(date, id, event)}
        ></Item>
    );
};

const TimeTableTest = ({}) => {
    const [isMouseDown, setMouseDown] = useState(false);
    const [isAddMode, setAddMode] = useState(true);
    const [items, setItems] = useState([]);

    const toggleItem = (date, id) => {
        let result = items.find((item) => item.date === date);

        if (!result) {
            result = { date, items: [id] };
            setItems((state) => [...state, result]);
            return;
        }

        setItems((state) =>
            state.map((item) => {
                if (item.date !== date) {
                    return item;
                }

                if (item.items.includes(id)) {
                    // 삭제
                    return {
                        date: item.date,
                        items: item.items.filter((element) => element !== id),
                    };
                } else {
                    // 추가
                    return {
                        date: item.date,
                        items: [...item.items, id],
                    };
                }
            })
        );
    };
    // console.log(items);

    const onItemMouseOver = (date, id, event) => {
        if (isMouseDown) {
            toggleItem(date, id);
        }
    };

    const onItemMouseDown = (date, id, event) => {
        setMouseDown(true);

        toggleItem(date, id);
    };

    const onItemMouseUp = (date, id, event) => {
        setMouseDown(false);
    };

    const elements = [];

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 48; j++) {
            let result = items.find((item) => item.date === i);
            let active = result && result.items.includes(j);

            elements.push(
                <TimeItem
                    key={`${i}-${j}`}
                    date={i}
                    id={j}
                    active={active}
                    onMouseOver={onItemMouseOver}
                    onMouseDown={onItemMouseDown}
                    onMouseUp={onItemMouseUp}
                />
            );
        }
    }

    return (
        <Container>
            <TimeGrid>{elements}</TimeGrid>
        </Container>
    );
};

export default TimeTableTest;
