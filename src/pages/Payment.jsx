import React from 'react'
import styled from 'styled-components'
import TextboxMini from '../components/TextboxMini.jsx';
import LinkBox from '../components/LinkBox.jsx';
import { useNavigate } from 'react-router-dom'; 
import { BsTagsFill, BsCreditCard2BackFill, BsInfoCircleFill, BsHeartFill } from "react-icons/bs";

const TextDiv = styled.div`
    margin-top: 30px;
`;

const LinkContainer = styled.div`
    margin-top: 30px;
`;


const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-top: 30px;
    margin-bottom: 10px;
    color: #FE5858;
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: #FE5858;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Memo = styled.div`
width: 329px;
height: 100px;
border-radius: 8px;
background-color: #FFF6F6;
color: #FE5858;
font-weight: 400;
font-size: 16px;
margin: 0 auto;
padding: 14px;
`;

const RepaymentButton = styled.div`
width: 329px;
height: 60px;
margin-top: 30px;
border-radius: 8px;
margin-left: auto;
margin-right: auto;
background-color: #FE5858;
color: #FFFFFF;
font-size: 24px;
font-weight: 700;
border: none; // 버튼의 기본 테두리 제거

transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        background-color: #cf3d3d;
    }

display: flex; // Flexbox 레이아웃 활성화
justify-content: center; // 자식 요소를 가로 방향으로 중앙 정렬
align-items: center; // 자식 요소를 세로 방향으로 중앙 정렬
gap: 8px; // 아이콘과 텍스트 사이의 간격
`



function Payment() {
    const navigate = useNavigate();
    const memo1 = "남기님은 만원, 현아님은 오천원 보내주시면 됩니다!"
  return (
    <>
        <TextDiv>
            <TextboxMini text="즐거운 밥약을 보내셨나요?"></TextboxMini>
            <TextboxMini text="링크를 통해 파티장에게 오늘의 비용을 송금하고,"></TextboxMini>
            <TextboxMini text="보은하기를 통해 새로운 밥약을 만들어봐요!!"></TextboxMini>
        </TextDiv>
        <TitleContainer>
            <BsTagsFill size="24px" />
            <Title>송금 메모</Title>
        </TitleContainer>
        <Memo>
            {memo1}
        </Memo>
        <LinkContainer>
            <LinkBox icon={BsCreditCard2BackFill} text="송금 링크" link={"https://www.youtube.com/wa"}></LinkBox>
        </LinkContainer>
        <LinkContainer>
            <LinkBox icon={BsInfoCircleFill} text="계좌 번호" link={"국민 29160204260628 유지희"}></LinkBox>
        </LinkContainer>
        <RepaymentButton onClick={() => navigate('/party/create')}>
            <BsHeartFill size="24px" />
            보은하기
        </RepaymentButton>
    </>
  )
}

export default Payment
