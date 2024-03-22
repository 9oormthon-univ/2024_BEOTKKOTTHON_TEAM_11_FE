import { useState } from 'react';
import styled from 'styled-components';
import TimeTable from '../components/TimeTable.jsx';
import dayjs from 'dayjs';
import Callout from '../components/Callout.jsx';
import ContentHeader from '../components/ContentHeader.jsx';
import { BsCalendarPlusFill, BsFillCalendarCheckFill } from 'react-icons/bs';
import Dropdown from '../components/Dropdown.jsx';
import BlockButton from '../components/BlockButton.jsx';
import TextInput from '../components/TextInput.jsx';
import DateInput from '../components/DateInput.jsx';
import SwitchButton from '../components/SwitchButton.jsx';

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
`;

const PendingEvent = ({}) => {
    const [selected, setSelected] = useState(1);

    const items = [
        { value: 'edit', text: '나의 시간대 입력' },
        { value: 'view', text: '밥약 정보' },
    ];

    const [value, setValue] = useState('edit');

    return (
        <Container>
            <SwitchButton items={items} value={value} onChange={setValue} />
            <Callout text="총 5명 중  2명 응답 완료!" />

            <Dropdown
                text="참여 인원 가능 시간"
                items={[
                    { text: '김경재', value: 1 },
                    { text: '김남기', value: 2 },
                    { text: '김현아', value: 3 },
                ]}
                onSelect={(value) => setSelected(value)}
                value={selected}
            />

            <ContentHeader
                icon={<BsCalendarPlusFill />}
                text="가능한 날짜 선택 하기"
            />
            <TimeTable
                startDate={dayjs('2024-03-28')}
                disabledRanges={[5, 6, 7]}
                readOnly={false}
            />
            <ContentHeader
                icon={<BsCalendarPlusFill />}
                text="확정된 시간 입력"
            />
            <DateInput placeholder="123" />
            <Button
                text={
                    <ButtonContent>
                        <BsFillCalendarCheckFill /> 응답 마감
                    </ButtonContent>
                }
            />
        </Container>
    );
};

export default PendingEvent;
