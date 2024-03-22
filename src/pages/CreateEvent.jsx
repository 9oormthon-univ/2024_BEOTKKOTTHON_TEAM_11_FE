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
import dayjs from 'dayjs';
import { createEvent } from '../api/event.js';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    padding: 0 31px;
    padding-bottom: 150px;
`;

const Button = styled(BlockButton)`
    margin-top: 32px;
`;

const CreateEvent = ({}) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState(
        dayjs().add(1, 'day').startOf('day')
    );
    const [endDate, setEndDate] = useState(
        dayjs().add(1, 'day').startOf('day')
    );

    const [location, setLocation] = useState('');
    const [memo, setMemo] = useState('');

    const onInput = (dispatch) => (event) => dispatch(event.target.value);

    const onSubmit = async (event) => {
        if (name === '') {
            alert('밥약 이름을 입력해주세요.');
            return;
        }

        if (location === '') {
            alert('밥약 장소를 입력해주세요.');
            return;
        }

        if (startDate.isAfter(endDate)) {
            alert('밥약 시간을 다시 설정해주세요.');
            return;
        }

        let response;

        try {
            response = await createEvent({
                // userId: 1, // TODO -> 이 부분 redux에서 받아올 것
                name,
                startDate: startDate.format('YYYY-MM-DD'),
                endDate: endDate.format('YYYY-MM-DD'),
                location,
                memo,
            });
        } catch (e) {
            alert('밥약 만들기에 실패했습니다');
            return;
        }

        navigate(`/sharebab?url=${response.url}`);
    };

    return (
        <Container>
            <ContentHeader icon={<IoMdCreate />} text="밥약 이름" />
            <TextInput
                placeholder="밥약 이름을 작성해주세요"
                value={name}
                onInput={onInput(setName)}
            />
            <Accordion
                icon={<BsCalendarPlusFill />}
                text="밥약 시간 설정"
                element={
                    <DatePicker
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(startDate, endDate) => {
                            console.log(1);
                            setStartDate(startDate);
                            setEndDate(endDate);
                        }}
                    />
                }
            />
            <ContentHeader icon={<IoMdPin />} text="밥약 장소" />
            <TextInput
                placeholder="밥약 장소를 작성해주세요"
                value={location}
                onInput={onInput(setLocation)}
            />
            <ContentHeader icon={<BsJournalText />} text="밥약 메모" />
            <TextInput
                placeholder="밥약 관련한 메모를 작성해주세요"
                value={memo}
                onInput={onInput(setMemo)}
            />
            <Button text="밥약 만들기" onClick={onSubmit} />
        </Container>
    );
};

export default CreateEvent;
