import classNames from 'classnames';
import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from '../components/DatePicker.jsx';
import { BsCalendarPlusFill, BsJournalText } from 'react-icons/bs';
import ContentHeader from '../components/ContentHeader.jsx';
import Accordion from '../components/Accordion.jsx';
import { IoMdCreate, IoMdPin } from 'react-icons/io';
import TextInput from '../components/TextInput.jsx';
import BlockButton from '../components/BlockButton.jsx';

const Container = styled.div`
    padding: 0 31px;
    padding-bottom: 150px;
`;

const Button = styled(BlockButton)`
    margin-top: 32px;
`;

const CreateParty = ({}) => {
    return (
        <Container>
            <ContentHeader icon={<IoMdCreate />} text="밥약 이름" />
            <TextInput placeholder="밥약 이름을 작성해주세요" />
            <Accordion
                icon={<BsCalendarPlusFill />}
                text="밥약 시간 설정"
                element={<DatePicker />}
            />
            <ContentHeader icon={<IoMdPin />} text="밥약 장소" />
            <TextInput placeholder="밥약 이름을 작성해주세요" />
            <ContentHeader icon={<BsJournalText />} text="밥약 메모" />
            <TextInput placeholder="밥약 관련한 메모를 작성해주세요" />
            <Button text="밥약 만들기" />
        </Container>
    );
};

export default CreateParty;
