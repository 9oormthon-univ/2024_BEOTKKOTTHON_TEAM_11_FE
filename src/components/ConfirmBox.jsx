import React from 'react';
import styled from 'styled-components';
import dummy from '../db/confirmdata.json'
import { IoIosCalendar, IoMdPin, IoMdPeople } from "react-icons/io";
import { BsFillBookmarkStarFill, BsFillBookmarkPlusFill  } from "react-icons/bs";

const BabDiv = styled.div`
    width: 345px;
    height: 180px;
    border-radius: 8px;
    background-color: #FFF6F6;
    margin: 34px auto;
    padding: 12px 19px 0 19px;
`;
//디데이+이름, 마크
const DNMContainer = styled.div`
    display: flex; //자식 요소들을 한 줄에 나열합니다.
    align-items: center;
    justify-content: space-between;
`;
//디데이+이름
const DdayNameContainer = styled.div`
    display: flex; //자식 요소들을 한 줄에 나열합니다.
    align-items: center;
`;
//디데이
const DDday = styled.p`
    color: #FFF6F6;
    background-color: #FE5858;
    width: 62px;
    height: 24px;
    border-radius: 8px;
    display: flex;            // flex 컨테이너 설정
    justify-content: center;  // 수평 중앙 정렬
    align-items: center;      // 수직 중앙 정렬
    font-weight: 600;
    font-size: 16px;
    margin-right: 10px;
`;

//밥약 이름, 파티장인지 파티원인지 구분마크
const MarkContainer = styled.div`
    color: #FE5858;
    width: 24px;
    height: 24px;
`;
const BabName = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: #FE5858;
    margin-bottom: 10px; // 아래쪽 여백 추가
    padding-top: 4px;
`;

//날짜
const DateContainer = styled.div`
    display: flex;
    align-items: center; // Flex 아이템들을 수직 중앙 정렬
    margin-left: 8px; // 아이콘과 날짜의 좌측 여백
`;
const StyledCalendarIcon = styled(IoIosCalendar)`
    color: #FE5858;
    width: 24px;
    height: 24px;
    margin-right: 8px; // 아이콘과 날짜 사이의 간격 조정
`;
const ConfirmDate = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #FE5858;
`;

//장소
const PlaceContainer = styled.div`
    display: flex;
    align-items: center; // Flex 아이템들을 수직 중앙 정렬
    margin-left: 8px; // 아이콘과 날짜의 좌측 여백
    margin-top: 12px;
`;
const StyledPinIcon = styled(IoMdPin)`
    color: #FE5858;
    width: 24px;
    height: 24px;
    margin-right: 7px; // 아이콘과 장소 사이의 간격 조정
`;
const ConfirmPlace = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #FE5858;
`;
//사람
const PeopleContainer = styled.div`
    display: flex;
    align-items: center; // Flex 아이템들을 수직 중앙 정렬
    margin-left: 8px; // 아이콘과 날짜의 좌측 여백
    margin-top: 12px;
`;
const StyledPeopleIcon = styled(IoMdPeople)`
    color: #FE5858;
    width: 24px;
    height: 24px;
    margin-right: 8px; // 아이콘과 장소 사이의 간격 조정
`;
//파티장 이름
const ConfirmPerson = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #FE5858;
`;
//파티원들 이름
const ConfirmPeople = styled.p`
    font-weight: 600;
    font-size: 10px;
    color: #FE5858;
    margin-left: 6px;
`;

function ConfirmBox(props) {
    const { eventName, date, time, place, host, participants, userRole } = props.event;

    // D-Day 계산
    const calculateDDay = (eventDate) => {
        const today = new Date();
        const eventDay = new Date(eventDate);
        const timeDiff = eventDay - today;
        const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

        return Math.floor(dayDiff);
    };

    const dDay = calculateDDay(date);
  return (
    <BabDiv>
        <DNMContainer>
            <DdayNameContainer>
                {/* D-Day 표시 추가 */}
                <DDday>{dDay === 0 ? 'D-Day' : `D-${dDay}`}</DDday>
                <BabName>{eventName}</BabName>
            </DdayNameContainer>
            
            <MarkContainer>
                {userRole === 'host' ? (
                    <BsFillBookmarkStarFill />
                    ) : (
                    <BsFillBookmarkPlusFill />
                )}
            </MarkContainer>
        </DNMContainer>
        
       
        <DateContainer>
            <StyledCalendarIcon />
            <ConfirmDate>{`${date} ${time}`}</ConfirmDate>
        </DateContainer>

        <PlaceContainer>
            <StyledPinIcon /><ConfirmPlace>{place}</ConfirmPlace>
        </PlaceContainer>

        <PeopleContainer>
            <StyledPeopleIcon />
            <ConfirmPerson>{host}</ConfirmPerson>
            <ConfirmPeople>{participants.join(', ')}</ConfirmPeople>
        </PeopleContainer>
    </BabDiv>
  )
}

export default ConfirmBox;



/* import { IoMdTime } from "react-icons/io";
//날짜, 시간
const DateTimeContainer = styled.div`
    display: flex; //자식 요소들을 한 줄에 나열합니다.
    align-items: center;
`;
//시간
const TimeContainer = styled.div`
    display: flex;
    align-items: center; // Flex 아이템들을 수직 중앙 정렬
    margin-left: 40px; // 아이콘과 날짜의 좌측 여백
`;
const StyledTimeIcon = styled(IoMdTime)`
    color: #FE5858;
    width: 24px;
    height: 24px;
    margin-right: 8px; // 아이콘과 날짜 사이의 간격 조정
`;
const ConfirmTime = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #FE5858;
`; */