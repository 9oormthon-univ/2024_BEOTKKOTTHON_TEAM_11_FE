import React from 'react'
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

const WaitDate = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #FE5858;
  &:after {
    content: ''; /* 기본 내용은 비워둠 */
    animation: ${dotsAnimation} 2s infinite; /* 애니메이션 적용 */
  }
`;


const BabDiv = styled.div`
    width: 345px;
    height: 180px;
    border-radius: 8px;
    background-color: #FFF6F6;
    margin: 34px auto;
    padding: 12px 19px 0 19px;
    box-shadow: 0px 4px 4px rgba(214, 73, 73, 0.15);
`;

const NMContainer = styled.div`
    display: flex; //자식 요소들을 한 줄에 나열합니다.
    align-items: center;
    justify-content: space-between;
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
`;
const StyledCalendarIcon = styled(IoIosCalendar)`
    color: #FE5858;
    width: 24px;
    height: 24px;
    margin-right: 8px; // 아이콘과 날짜 사이의 간격 조정
`;
/* const WaitDate = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #FE5858;
`; */

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
const AnswerPeople = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #FE5858;
    margin-left: 6px;
`;

function WaitBox(props) {
    const { name, isLeader, dateStatus, date, place, confirmedPeopleCount, allResponded } = props.event;
  
    return (
      <BabDiv>
          <NMContainer>
              <BabName>{name}</BabName>
              <MarkContainer>
                  {isLeader ? <BsFillBookmarkStarFill size={24}/> : <BsFillBookmarkPlusFill size={24}/>}
              </MarkContainer>
          </NMContainer>
          <DateContainer>
              <StyledCalendarIcon />
              <WaitDate>
                {dateStatus ? `${date}` : "약속 정하는 중"}
              </WaitDate>
          </DateContainer>
  
          <PlaceContainer>
              <StyledPinIcon /><ConfirmPlace>{place}</ConfirmPlace>
          </PlaceContainer>
  
          <PeopleContainer>
              <StyledPeopleIcon />
              {
                allResponded
                    ? <AnswerPeople>모두 응답 완료했어요!</AnswerPeople>
                    : <AnswerPeople>현재 {confirmedPeopleCount}명이 응답 완료했어요!</AnswerPeople>
              }
          </PeopleContainer>
      </BabDiv>
    );
  }

export default WaitBox
