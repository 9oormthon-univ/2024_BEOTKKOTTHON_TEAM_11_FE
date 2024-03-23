import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimeTable from '../components/TimeTable.jsx';
import dayjs from 'dayjs';
import _Callout from '../components/Callout.jsx';
import _ContentHeader from '../components/ContentHeader.jsx';
import { BsCalendarPlusFill, BsFillCalendarCheckFill } from 'react-icons/bs';
import _Dropdown from '../components/Dropdown.jsx';
import BlockButton from '../components/BlockButton.jsx';
import TextInput from '../components/TextInput.jsx';
import _DateInput from '../components/DateInput.jsx';
import SwitchButton from '../components/SwitchButton.jsx';
import classNames from 'classnames';
import { getEvent, postConfirmEvent } from '../api/event.js';
import {
    getTimeTable,
    modifyTimeTable,
    postTimeTable,
} from '../api/timetable.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectId, selectToken } from '../redux/userSlice.js';
import { setTitle } from '../redux/appSlice.js';

const Container = styled.div`
    padding: 0 31px;
    padding-bottom: 150px;
`;

const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Button = styled(BlockButton)`
    margin-top: 24px;
    &.hidden {
        display: none;
    }
`;

const ContentHeader = styled(_ContentHeader)`
    &.hidden {
        display: none;
    }
`;

const Dropdown = styled(_Dropdown)`
    &.hidden {
        display: none;
    }
`;

const Callout = styled(_Callout)`
    &.hidden {
        display: none;
    }
`;

const DateInput = styled(_DateInput)`
    &.hidden {
        display: none;
    }
`;

const COLUMN = 4;
const ROW = 24;

async function buildEditTimeTable(
    startDate,
    setTimeTable,
    token,
    eventId,
    userId
) {
    const data = Array(COLUMN * 2)
        .fill(null)
        .map((item, index) => ({
            date: index,
            items: Array(ROW).fill(0),
        }));

    let response;
    try {
        response = await getTimeTable({
            token,
            eventId,
            userId,
        });
    } catch (e) {
        // 아직 시간표를 등록하지 않음
        setTimeTable(data);
        return false;
    }

    for (const { date, items } of response) {
        const index = dayjs(date).diff(startDate, 'd');
        data[index].items = items;
    }

    setTimeTable(data);

    return true;
}

async function buildViewTimeTable(
    list,
    id,
    startDate,
    setTimeTable,
    token,
    eventId
) {
    const data = Array(COLUMN * 2)
        .fill(null)
        .map((item, index) => ({
            date: index,
            items: Array(ROW).fill(0),
        }));

    const participants = list.filter((item) => id === 0 || item.id === id);

    let response;

    let count = 0;

    for (const participant of participants) {
        count++;
        try {
            response = await getTimeTable({
                token,
                eventId,
                userId: participant.id,
            });
        } catch (e) {
            // 아직 시간표를 등록하지 않음
            continue;
        }

        for (const { date, items } of response) {
            const index = dayjs(date).diff(startDate, 'd');
            data[index].items = data[index].items.map(
                (item, i) => item + items[i]
            );
        }
    }

    setTimeTable(
        data.map((item) => ({
            date: item.date,
            items: item.items.map((item) => item / count),
        }))
    );
}

const PendingEvent = ({}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { eventId } = useParams();
    const userId = useSelector(selectId);
    const token = useSelector(selectToken);
    const [selectedParticipant, setSelectedParticipant] = useState(0);
    const [userRole, setUserRole] = useState('member');
    const [participants, setParticipants] = useState([]);
    const [startDate, setStartDate] = useState(
        dayjs().add(1, 'day').startOf('day')
    );
    const [endDate, setEndDate] = useState(
        dayjs().add(1, 'day').startOf('day')
    );
    const [timeTable, setTimeTable] = useState([]);
    const [responseCount, setResponseCount] = useState(0);
    const [preferredTime, setPreferredTime] = useState(
        dayjs().add(1, 'day').startOf('day')
    );

    const [timetableStatus, setTimetableStatus] = useState(false);

    const items = [
        { value: 'edit', text: '나의 시간대 입력' },
        { value: 'view', text: '밥약 정보' },
    ];

    const [value, setValue] = useState('edit');

    useEffect(() => {
        (async () => {
            let response;

            if (!token || !userId || !eventId) {
                return;
            }

            try {
                response = await getEvent({
                    token,
                    userId,
                    eventId,
                });
            } catch (e) {
                alert('밥약 정보를 불러오는데 실패했습니다.');
                return;
            }

            dispatch(setTitle(response.name));

            setUserRole(response.userRole);
            setStartDate(dayjs(response.startDate));
            setEndDate(dayjs(response.endDate));
            setResponseCount(response.confirmCount);
            setParticipants(response.participants);

            // buildEditTimeTable(dayjs(response.startDate), setTimeTable);
        })();
    }, [token, userId, eventId]);

    useEffect(() => {
        (async () => {
            if (!token || !userId || !eventId) {
                return;
            }

            if (value === 'edit') {
                setTimetableStatus(
                    await buildEditTimeTable(
                        startDate,
                        setTimeTable,
                        token,
                        eventId,
                        userId
                    )
                );
            } else {
                buildViewTimeTable(
                    participants,
                    selectedParticipant,
                    startDate,
                    setTimeTable,
                    token,
                    eventId
                );
            }
        })();
    }, [participants, value, selectedParticipant, startDate]);

    const participantList = [
        { text: '모든 참가자', value: 0 },
        ...participants.map((item) => ({
            text: item.name,
            value: item.id,
        })),
    ];

    const onEventSubmit = async (event) => {
        let response;

        try {
            response = await postConfirmEvent({
                token,
                eventId,
                date: preferredTime.format('YYYY-MM-DD'),
                time: preferredTime.format('HH:mm'),
            });
        } catch (e) {
            alert('밥약을 확정하는데 실패했습니다.');
            console.error(e);
            return;
        }

        alert('밥약이 확정되었습니다.');

        navigate('/events/scheduled');
    };

    const onTimeTableSubmit = async (event) => {
        let response;

        const list = timeTable.map((item) => ({
            date: startDate.add(item.date, 'd').format('YYYY-MM-DD'),
            items: item.items,
        }));

        try {
            if (timetableStatus) {
                response = await modifyTimeTable({
                    token,
                    userId,
                    eventId,
                    list,
                });
            } else {
                response = await postTimeTable({
                    token,
                    userId,
                    eventId,
                    list,
                });
            }
        } catch (e) {
            alert('시간표를 저장하는데 실패했습니다.');
            console.error(e);
            return;
        }

        alert('시간표가 저장되었습니다.');

        setValue('view');
    };

    return (
        <Container>
            <SwitchButton items={items} value={value} onChange={setValue} />
            <Callout
                className={classNames({ hidden: value === 'edit' })}
                text={`총 ${participants.length}명 중 ${responseCount}명이 응답 완료!`}
            />
            <Dropdown
                className={classNames({ hidden: value === 'edit' })}
                text="참여 인원 가능 시간"
                items={participantList}
                onSelect={(value) => setSelectedParticipant(value)}
                value={selectedParticipant}
            />

            <ContentHeader
                className={classNames({ hidden: value === 'view' })}
                icon={<BsCalendarPlusFill />}
                text="가능한 날짜 선택 하기"
            />
            <ContentHeader
                className={classNames({ hidden: value === 'edit' })}
                icon={<BsCalendarPlusFill />}
                text="가능 시간 응답 결과"
            />
            <TimeTable
                column={COLUMN}
                row={ROW}
                startDate={startDate}
                endDate={endDate}
                showCheck={value === 'view' && selectedParticipant === 0}
                readOnly={value === 'view'}
                value={timeTable}
                onChange={setTimeTable}
            />
            <ContentHeader
                className={classNames({
                    hidden: value === 'edit' || userRole === 'member',
                })}
                icon={<BsCalendarPlusFill />}
                text="확정된 시간 입력"
            />
            <DateInput
                className={classNames({
                    hidden: value === 'edit' || userRole === 'member',
                })}
                onInput={(event) => setPreferredTime(dayjs(event.target.value))}
                value={preferredTime.format('YYYY-MM-DDTHH:mm')}
            />
            <Button
                className={classNames({
                    hidden: value === 'edit' || userRole === 'member',
                })}
                text={
                    <ButtonContent>
                        <BsFillCalendarCheckFill /> 응답 마감
                    </ButtonContent>
                }
                onClick={onEventSubmit}
            />
            <Button
                className={classNames({ hidden: value === 'view' })}
                text={
                    <ButtonContent>
                        <BsFillCalendarCheckFill /> 시간대 제출
                    </ButtonContent>
                }
                onClick={onTimeTableSubmit}
            />
        </Container>
    );
};

export default PendingEvent;
