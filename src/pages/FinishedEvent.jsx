import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextboxMini from '../components/TextboxMini.jsx';
import LinkBox from '../components/LinkBox.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import {
    BsTagsFill,
    BsCreditCard2BackFill,
    BsInfoCircleFill,
} from 'react-icons/bs';
import { BiSmile, BiSolidBowlRice } from 'react-icons/bi';
import { getPaymentInfo } from '../api/event.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../redux/userSlice.js';
import { setTitle } from '../redux/appSlice.js';

const Container = styled.div`
    overflow-y: auto; // 세로 방향으로 스크롤 가능
    height: 100vh; // 뷰포트 높이의 100%로 설정
`;

const SmileIcon = styled.div`
    color: #fe5858;
    display: flex; // Flexbox 레이아웃 활성화
    justify-content: center; // 자식 요소(아이콘)를 가로 방향으로 중앙 정렬
`;

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
    color: #fe5858;
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: #fe5858;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Memo = styled.div`
    width: 329px;
    height: 100px;
    border-radius: 8px;
    background-color: #fff6f6;
    color: #fe5858;
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
    margin-bottom: 130px;
    background-color: #fe5858;
    color: #ffffff;
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
`;

function FinishedEvent() {
    const navigate = useNavigate();
    const token = useSelector(selectToken);
    const { eventId } = useParams();

    const [paymentMemo, setPaymentMemo] = useState('');
    const [paymentLink, setPaymentLink] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    useEffect(() => {
        (async () => {
            let response;

            if (!token || !eventId) {
                return;
            }

            try {
                response = await getPaymentInfo({ token, eventId });
            } catch (e) {
                alert('밥약 정보를 불러오는데 실패했습니다.');
                return;
            }

            setPaymentMemo(response.paymentMemo);
            setPaymentLink(response.paymentLink);
            setAccountNumber(response.accountNumber);
        })();
    }, [token, eventId]);

    return (
        <>
            <Container>
                <SmileIcon>
                    <BiSmile size="135px" />
                </SmileIcon>
                <TextDiv>
                    <TextboxMini text="즐거운 밥약을 보내셨나요?"></TextboxMini>
                    <TextboxMini text="링크를 통해 파티장에게 오늘의 비용을 송금하고,"></TextboxMini>
                    <TextboxMini text="보은하기를 통해 새로운 밥약을 만들어봐요!!"></TextboxMini>
                </TextDiv>
                <TitleContainer>
                    <BsTagsFill size="24px" />
                    <Title>송금 메모</Title>
                </TitleContainer>
                <Memo>{paymentMemo}</Memo>
                <LinkContainer>
                    <LinkBox
                        icon={BsCreditCard2BackFill}
                        text="송금 링크"
                        link={paymentLink}
                    ></LinkBox>
                </LinkContainer>
                <LinkContainer>
                    <LinkBox
                        icon={BsInfoCircleFill}
                        text="계좌 번호"
                        link={accountNumber}
                    ></LinkBox>
                </LinkContainer>
                <RepaymentButton onClick={() => navigate('/event/create')}>
                    <BiSolidBowlRice size="30px" />
                    보은하기
                </RepaymentButton>
            </Container>
        </>
    );
}

export default FinishedEvent;
