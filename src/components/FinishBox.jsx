import React from 'react';
import styled from 'styled-components';
import dummy from '../db/confirmdata.json'
import { IoIosCalendar, IoMdPin, IoMdPeople, IoMdDoneAll, IoIosArrowForward } from "react-icons/io";
import { BsFillBookmarkStarFill, BsFillBookmarkPlusFill  } from "react-icons/bs";

const BabDiv = styled.div`
    width: 345px;
    height: 180px;
    border-radius: 8px;
    background-color: #FFF6F6;
    margin: 34px auto;
    padding: 12px 19px 0 19px;
    box-shadow: 0px 4px 4px rgba(214, 73, 73, 0.15);
`;
//체크마크+이름, 파티원/장 구분마크
const DNMContainer = styled.div`
    display: flex; //자식 요소들을 한 줄에 나열합니다.
    align-items: center;
    justify-content: space-between;
`;
//체크마크+이름
const StyledIoMdDoneAll = styled(IoMdDoneAll)`
    color: #FE5858;
    margin-right: 8px;
`
const CheckMNameContainer = styled.div`
    display: flex; //자식 요소들을 한 줄에 나열합니다.
    align-items: center;
`;

//파티장인지 파티원인지 구분마크, 밥약 이름
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
    margin-top: 2px;
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

// arrowm button
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
      color: #FE5858;
  }

  &.disabled {
      color: rgba(245, 223, 223, 1);
      pointer-events: none;
  }
`;

//인원+화살표 버튼
const PeopleArrowContainer = styled.div`
  display: flex; //자식 요소들을 한 줄에 나열합니다.
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

function FinishBox(props) {
    const { eventName, date, time, place, host, participants, userRole } = props.event;
  return (
    <BabDiv>
        <DNMContainer>
            <CheckMNameContainer>
                <StyledIoMdDoneAll size={24}/>
                <BabName>{eventName}</BabName>
            </CheckMNameContainer>
            
            <MarkContainer>
                {userRole === 'host' ? (
                    <BsFillBookmarkStarFill size={24}/>
                    ) : (
                    <BsFillBookmarkPlusFill size={24}/>
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
        
        <PeopleArrowContainer>
            <PeopleContainer>
                <StyledPeopleIcon />
                <ConfirmPerson>{host}</ConfirmPerson>
                <ConfirmPeople>{participants.join(', ')}</ConfirmPeople>
                
            </PeopleContainer>
            <Button>
                    <IoIosArrowForward/>
            </Button>
        </PeopleArrowContainer>
    </BabDiv>
  )
}

export default FinishBox;



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