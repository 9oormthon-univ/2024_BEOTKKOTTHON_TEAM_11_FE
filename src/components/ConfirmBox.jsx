import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosCalendar, IoMdPin, IoMdPeople, IoIosArrowForward } from "react-icons/io";
import { BsFillBookmarkStarFill, BsFillBookmarkPlusFill  } from "react-icons/bs";

const BabDiv = styled.div`
    width: 345px;
    height: 180px;
    border-radius: 8px;
    background-color: ${props => props.hover ? '#FE5858' : '#FFF6F6'};
    color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
    margin: 34px auto;
    padding: 12px 19px 0 19px;
    box-shadow: 0px 4px 4px rgba(214, 73, 73, 0.15);
    transition: background-color 0.3s, color 0.3s;
`;

const DNMContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DdayNameContainer = styled.div`
    display: flex;
    align-items: center;
`;

const DDday = styled.p`
    background-color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
    color: ${props => props.hover ? '#FE5858' : '#FFF6F6'};
    width: 62px;
    height: 24px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    margin-right: 10px;
`;

const MarkContainer = styled.div`
    color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
    
    width: 24px;
    height: 24px;
`;
const BabName = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
    margin-bottom: 10px;
    padding-top: 4px;
`;

const iconStyle = hover => `
    color: ${hover ? '#FFF6F6' : '#FE5858'};
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-top: 2px;
`;
const StyledCalendarIcon = styled(IoIosCalendar)`
${({ hover }) => iconStyle(hover)}
`;
const ConfirmDate = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
`;

const PlaceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-top: 12px;
`;
const StyledPinIcon = styled(IoMdPin)`
${({ hover }) => iconStyle(hover)}
    margin-right: 7px;
`;
const ConfirmPlace = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
`;

const PeopleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 8px;
`;
const StyledPeopleIcon = styled(IoMdPeople)`
${({ hover }) => iconStyle(hover)}
`;

const ConfirmPerson = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
`;

const ConfirmPeople = styled.p`
    font-weight: 600;
    font-size: 10px;
    color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
    margin-left: 6px;
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
      color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
  }

  &.disabled {
      color: rgba(245, 223, 223, 1);
      pointer-events: none;
  }
`;

const PeopleArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;


function ConfirmBox(props) {
    const { eventName, date, time, place, host, participants, userRole } = props.event;
    const [hover, setHover] = useState(false);
    const navigate = useNavigate(); // useNavigate 훅 사용

    const calculateDDay = (eventDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const eventDay = new Date(eventDate);
        eventDay.setHours(0, 0, 0, 0);

        const timeDiff = eventDay - today;
        const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

        return Math.ceil(dayDiff);
    };

    const dDay = calculateDDay(date);
  return (
    <BabDiv onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} hover={hover}>
        <DNMContainer>
            <DdayNameContainer>
                <DDday hover={hover}>{dDay === 0 ? 'D-Day' : `D-${dDay}`}</DDday>
                <BabName hover={hover}>{eventName}</BabName>
            </DdayNameContainer>
            
            <MarkContainer hover={hover}>
                {userRole === 'host' ? (
                    <BsFillBookmarkStarFill size={24}/>
                    ) : (
                    <BsFillBookmarkPlusFill size={24}/>
                )}
            </MarkContainer>
        </DNMContainer>
        
       
        <DateContainer>
            <StyledCalendarIcon hover={hover} />
            <ConfirmDate hover={hover}>{`${date} ${time}`}</ConfirmDate>
        </DateContainer>

        <PlaceContainer>
            <StyledPinIcon hover={hover} /><ConfirmPlace hover={hover}>{place}</ConfirmPlace>
        </PlaceContainer>

        <PeopleArrowContainer>
            <PeopleContainer>
                <StyledPeopleIcon hover={hover} />
                <ConfirmPerson hover={hover}>{host}</ConfirmPerson>
                <ConfirmPeople hover={hover}>{participants.join(', ')}</ConfirmPeople>
                
            </PeopleContainer>
            <Button onClick={() => navigate('/party/scheduled')} hover={hover} className={userRole !== 'host' ? 'disabled' : ''}>
                <IoIosArrowForward />
            </Button>
        </PeopleArrowContainer>
    </BabDiv>
  );
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