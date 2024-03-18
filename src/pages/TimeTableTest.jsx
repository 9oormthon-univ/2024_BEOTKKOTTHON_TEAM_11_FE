// 시간표 테스트 페이지입니다. 기술 테스트 후 나중에 제거 예정

import classNames from 'classnames';
import { useState } from 'react';
import styled from 'styled-components';
import TimeItem from '../components/TimeItem.jsx';
import TimeTable from '../components/TimeTable.jsx';

const Container = styled.div`
    padding: 0 31px;
    padding-bottom: 48px;
`;

const Text = styled.p`
    margin: 18px 0;
    display: block;
    font-size: 18px;
    text-align: center;
`;

const TimeTableTest = ({}) => {
    return (
        <Container>
            <Text>시간을 드래그해보세요.</Text>
            <TimeTable />
        </Container>
    );
};

export default TimeTableTest;
