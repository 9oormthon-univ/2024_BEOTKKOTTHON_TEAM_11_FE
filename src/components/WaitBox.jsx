import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { IoIosCalendar, IoMdPin, IoMdPeople, IoIosArrowForward } from "react-icons/io";
import { BsFillBookmarkStarFill, BsFillBookmarkPlusFill  } from "react-icons/bs";

//...애니메이션
const dotsAnimation = keyframes`
  0%, 20% {
    content: '';
  }
  25%, 45% {
    content: '.';
  }
  50%, 70% {
    content: '..';
  }
  75%, 95% {
    content: '...';
  }
`;

const BabDiv = styled.div`
  width: 345px;
  height: 180px;
  border-radius: 8px;
  background-color: ${props => props.hover ? '#FE5858' : '#FFF6F6'};
  color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
  margin: 34px auto;
  padding: 12px 19px 0 19px;
  box-shadow: 0px 4px 4px rgba(214, 73, 73, 0.15);
  transition: background-color 0.3s, color 0.3s; // 부드러운 색상 전환을 위한 transition 추가
`;

//밥약이름+파티원/장 구분마크
const NMContainer = styled.div`
  display: flex; //자식 요소들을 한 줄에 나열합니다.
  align-items: center;
  justify-content: space-between;
`;
//밥약 이름
const BabName = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
  margin-bottom: 10px;
  padding-top: 4px;
`;
//파티장인지 파티원인지 구분마크
const MarkContainer = styled.div`
  color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
  width: 24px;
  height: 24px;
`;

// 날짜, 장소, 사람 아이콘에 대한 스타일 변경
const iconStyle = hover => `
  color: ${hover ? '#FFF6F6' : '#FE5858'};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

//날짜
const DateContainer = styled.div`
  display: flex;
  align-items: center; // Flex 아이템들을 수직 중앙 정렬
  margin-left: 8px; // 아이콘과 날짜의 좌측 여백
  margin-top: 2px;
`;
const StyledCalendarIcon = styled(IoIosCalendar)`
${({ hover }) => iconStyle(hover)}
`;
/* const WaitDate = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #FE5858;
`; */
//약속 정하는 중
const WaitDate = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
  &:after {
    content: ''; /* 기본 내용은 비워둠 */
    animation: ${dotsAnimation} 2s infinite; /* 애니메이션 적용 */
  }
`;

//장소
const PlaceContainer = styled.div`
  display: flex;
  align-items: center; // Flex 아이템들을 수직 중앙 정렬
  margin-left: 8px; // 아이콘과 날짜의 좌측 여백
  margin-top: 12px;
`;
const StyledPinIcon = styled(IoMdPin)`
${({ hover }) => iconStyle(hover)}
margin-right: 7px; // StyledPinIcon만 margin-right가 다르므로 추가 정의
`;
const ConfirmPlace = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
`;

//인원+화살표 버튼
const PeopleArrowContainer = styled.div`
  display: flex; //자식 요소들을 한 줄에 나열합니다.
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
//사람
const PeopleContainer = styled.div`
  display: flex;
  align-items: center; // Flex 아이템들을 수직 중앙 정렬
  margin-left: 8px; // 아이콘과 날짜의 좌측 여백
  
`;
const StyledPeopleIcon = styled(IoMdPeople)`
${({ hover }) => iconStyle(hover)}
`;
const AnswerPeople = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
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
      color: ${props => props.hover ? '#FFF6F6' : '#FE5858'};
  }

  &.disabled {
      color: rgba(245, 223, 223, 1);
      pointer-events: none;
  }
`;

function WaitBox(props) {
    const { name, isLeader, dateStatus, date, place, confirmedPeopleCount, allResponded } = props.event;
    const [hover, setHover] = useState(false); // 호버 상태를 추적하는 state 추가
    const navigate = useNavigate(); // useNavigate 훅 사용

    return (
      <BabDiv hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <NMContainer>
              <BabName hover={hover}>{name}</BabName>
              <MarkContainer hover={hover}>
                  {isLeader ? <BsFillBookmarkStarFill size={24}/> : <BsFillBookmarkPlusFill size={24}/>}
              </MarkContainer>
          </NMContainer>
          <DateContainer>
              <StyledCalendarIcon hover={hover}  />
              <WaitDate  hover={hover}>
                {dateStatus ? `${date}` : "약속 정하는 중"}
              </WaitDate>
          </DateContainer>
  
          <PlaceContainer>
              <StyledPinIcon hover={hover} /><ConfirmPlace hover={hover}>{place}</ConfirmPlace>
          </PlaceContainer>
          <PeopleArrowContainer>
            <PeopleContainer>
              <StyledPeopleIcon hover={hover} />
              <AnswerPeople hover={hover}>
                {allResponded
                    ? "모두 응답 완료했어요!"
                    : `현재 ${confirmedPeopleCount}명이 응답 완료했어요!`}
              </AnswerPeople>
            </PeopleContainer>
            <Button onClick={() => navigate('/party/pending')} hover={hover}>
                  <IoIosArrowForward/>
            </Button>
          </PeopleArrowContainer>
      </BabDiv>
    );
  }

export default WaitBox
