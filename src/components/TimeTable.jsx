import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TimeTableContent from './TimeTableContent.jsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import classNames from 'classnames';
import dayjs from 'dayjs';

const Container = styled.div`
    padding: 16px;
    border-radius: 8px;
    background-color: rgba(255, 246, 246, 1);
`;

const Header = styled.div`
    padding: 12px 0;
    padding-top: 0px;
    border-bottom: 2px solid rgba(254, 88, 88, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(254, 88, 88, 1);
    font-size: 18px;
    font-weight: 700;
`;

const Button = styled.button`
    padding: 4px;
    background: none;
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
        background-color: #0000001f;
    }

    & > svg {
        width: 24px;
        height: 24px;
    }

    &.disabled {
        color: rgba(245, 223, 223, 1);
        pointer-events: none;
    }

    &.hidden {
        visibility: hidden;
    }
`;

const DateContainer = styled.div`
    margin: 8px 0;
    padding-left: 56px;
    padding-right: 12px;

    & > div > div {
        display: flex;
        align-items: center;
    }
`;

const DateItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    color: rgba(254, 88, 88, 1);

    & > p:nth-child(1) {
        font-weight: 500;
        font-size: 12px;
    }

    & > p:nth-child(2) {
        font-weight: 500;
        font-size: 16px;
    }

    &.disabled {
        color: rgba(255, 212, 212, 1);
    }
`;

const Content = styled.div`
    padding: 12px;
    border-radius: 8px;
    display: flex;
    align-items: flex-start;
    gap: 4px;
    background-color: rgba(255, 255, 255, 1);
`;

const SideBar = styled.div`
    display: grid;
    gap: 1px;
    grid-template-rows: repeat(${(props) => props.$row}, 1fr);
    color: rgba(254, 88, 88, 1);
    font-weight: 600;
`;

const SideBarItem = styled.div`
    width: 40px;
    height: 29px;
    margin: 1px 0;
    padding: 0 4px;
    border-right: 1.5px solid rgba(254, 88, 88, 1);
    display: flex;
    align-items: flex-start;
    justify-content: center;

    font-size: 10px;
`;

const InnerWrapper = styled.div`
    width: auto;
    display: flex;
    flex-grow: 1;
    overflow: hidden;

    & > div {
        width: 100%;
        position: relative;

        transition: margin 0.3s ease;
    }

    &.next {
        & > div:nth-child(1) {
            margin-left: -100%;
        }
    }
`;

const COLUMN = 4;
const ROW = 24;

const TimeTable = ({ startDate, disabledRanges, readOnly }) => {
    const [isNextPage, setNextPage] = useState(false);

    const isSinglePage = [4, 5, 6, 7].every((item) =>
        disabledRanges.includes(item)
    );

    const items = [];
    for (let i = 0; i < ROW / 2; i++) {
        items.push(<SideBarItem key={i}>{11 + i}:00</SideBarItem>);
    }

    const dates = [];
    for (let i = 0; i < 8; i++) {
        const date = startDate.add(i, 'd');

        dates.push(
            <DateItem
                key={i}
                className={classNames({ disabled: disabledRanges.includes(i) })}
            >
                <p>{date.format('ddd')}</p>
                <p>{date.format('D')}</p>
            </DateItem>
        );
    }

    const headerDate = (isNextPage ? startDate.add(4, 'd') : startDate).format(
        'YYYY. MM'
    );

    const onPrevButtonClick = (event) => {
        setNextPage(false);
    };

    const onNextButtonClick = (event) => {
        setNextPage(true);
    };

    return (
        <Container>
            <Header>
                <Button
                    onClick={onPrevButtonClick}
                    className={classNames({
                        disabled: !isNextPage,
                        hidden: isSinglePage,
                    })}
                >
                    <IoIosArrowBack />
                </Button>
                <p>{headerDate}</p>
                <Button
                    onClick={onNextButtonClick}
                    className={classNames({
                        disabled: isNextPage,
                        hidden: isSinglePage,
                    })}
                >
                    <IoIosArrowForward />
                </Button>
            </Header>
            <DateContainer>
                <InnerWrapper className={classNames({ next: isNextPage })}>
                    <div>{dates.slice(0, 4)}</div>
                    <div>{dates.slice(4, 8)}</div>
                </InnerWrapper>
            </DateContainer>
            <Content>
                <SideBar $row={ROW / 2}>{items}</SideBar>
                <InnerWrapper className={classNames({ next: isNextPage })}>
                    <TimeTableContent
                        column={COLUMN}
                        row={ROW}
                        readOnly={readOnly}
                        disabledRanges={disabledRanges.filter(
                            (item) => item >= 0 && item < 4
                        )}
                    />
                    <TimeTableContent
                        column={COLUMN}
                        row={ROW}
                        readOnly={readOnly}
                        disabledRanges={disabledRanges
                            .filter((item) => item >= 4 && item < 8)
                            .map((item) => item - 4)}
                    />
                </InnerWrapper>
            </Content>
        </Container>
    );
};

export default TimeTable;
