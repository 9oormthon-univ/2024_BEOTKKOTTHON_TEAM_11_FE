// 날짜 선택 테스트 페이지입니다. 기술 테스트 후 나중에 제거 예정

import classNames from 'classnames';
import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from '../components/DatePicker.jsx';

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

const DatePickerTest = ({}) => {
    return (
        <Container>
            <Text>시작 날짜와 종료 날짜를 고르세요.</Text>
            <DatePicker />
        </Container>
    );
};

export default DatePickerTest;
