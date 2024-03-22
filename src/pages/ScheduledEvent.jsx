import { useState } from 'react';
import styled from 'styled-components';
import ContentHeader from '../components/ContentHeader.jsx';
import {
    BsCalendarPlusFill,
    BsCreditCard2BackFill,
    BsFillBookmarkPlusFill,
    BsFillBookmarkStarFill,
    BsJournalText,
    BsQuestionCircleFill,
} from 'react-icons/bs';
import BlockButton from '../components/BlockButton.jsx';
import _TextInput from '../components/TextInput.jsx';
import { IoMdPeople, IoMdPin } from 'react-icons/io';
import PaymentAccordion from '../components/PaymentAccordion.jsx';

const Container = styled.div`
    padding: 0 24px;
    padding-bottom: 150px;
`;

const Wrapper = styled.div`
    padding: 18px 24px;
    border-radius: 8px;
    background-color: #fff6f6;

    box-shadow: 0px 4px 4px 0px #d6494926;
`;

const Header = styled.p`
    padding-bottom: 8px;
    border-bottom: 3px solid #ffffff;
    color: #fe5858;
    font-size: 32px;
    font-weight: 700;
`;

const Badge = styled.div`
    min-width: 70px;
    min-height: 28px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 500;

    background-color: #fe5858;
    color: #ffffff;
`;

const BadgeContainer = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 4px;
`;

const Item = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
`;

const ItemLine = styled.div`
    width: 3px;
    margin: 0 18px;
    border-radius: 1px;
    background-color: #fe5858;
`;

const ItemContent = styled.div`
    height: 100%;
    padding: 8px 12px;
    border-radius: 8px;
    color: #fe5858;
    background-color: #ffffff;

    font-size: 16px;
    font-weight: 400;

    flex-grow: 1;
    flex-shrink: 1;

    overflow: auto;
`;

const MemberContainer = styled.div`
    margin: 16px 0;
    display: flex;
    gap: 10px;
    color: #fe5858;

    & > svg {
        font-size: 18px;

        line-height: 20px;
    }

    & > p:nth-child(2) {
        font-size: 14px;
        font-weight: 700;

        line-height: 20px;
    }

    & > p:nth-child(3) {
        margin-left: 12px;

        font-size: 16px;
        font-weight: 700;
        flex-grow: 1;
        flex-shrink: 1;

        line-height: 20px;
    }
`;

const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Button = styled(BlockButton)`
    margin-top: 24px;
`;

const TextInput = styled(_TextInput)`
    background-color: #ffffff;

    & > input {
        background-color: #ffffff;
    }
`;

const ScheduledEvent = ({}) => {
    const [selected, setSelected] = useState(1);
    const [isShowPayment, setShowPayment] = useState(false);

    return (
        <Container>
            <Wrapper>
                <Header>이츠타임 회식</Header>
                <BadgeContainer>
                    <Badge>D - 00</Badge>
                    <Badge>
                        <BsFillBookmarkStarFill />
                        파티장
                    </Badge>
                </BadgeContainer>
                <ContentHeader icon={<BsCalendarPlusFill />} text="밥약 일정" />
                <Item>
                    <ItemLine />
                    <ItemContent>2024년 03월 23일 토요일 14:00</ItemContent>
                </Item>
                <ContentHeader icon={<IoMdPin />} text="밥약 장소" />
                <Item>
                    <ItemLine />
                    <ItemContent>분당 리파인</ItemContent>
                </Item>
                <ContentHeader icon={<IoMdPeople />} text="참여 인원" />
                <Item>
                    <ItemLine />
                    <ItemContent>
                        <MemberContainer>
                            <BsFillBookmarkStarFill />
                            <p>파티장</p>
                            <p style={{ fontSize: '18px' }}>홍길동</p>
                        </MemberContainer>
                        <MemberContainer>
                            <BsFillBookmarkPlusFill />
                            <p>파티원</p>
                            <p>
                                홍길동 홍길동 홍길동 홍길동 홍길동 홍길동 홍길동
                            </p>
                        </MemberContainer>
                    </ItemContent>
                </Item>
                <ContentHeader icon={<BsJournalText />} text="밥약 메모" />
                <Item>
                    <ItemLine />
                    <ItemContent>밥약 관련한 메모를 작성해주세요</ItemContent>
                </Item>
                <PaymentAccordion
                    icon={<BsQuestionCircleFill />}
                    text="송금 정보를 제공할까요?"
                    value={isShowPayment}
                    onChange={(value) => setShowPayment(value)}
                >
                    <ContentHeader icon={<BsJournalText />} text="송금 메모" />
                    <TextInput placeholder="송금 관련한 메모를 작성해주세요" />
                    <ContentHeader
                        icon={<BsCreditCard2BackFill />}
                        text="송금 링크 (선택)"
                    />
                    <TextInput placeholder="https://qr.kakaopay.com/000000" />
                    <ContentHeader
                        icon={<BsCreditCard2BackFill />}
                        text="계좌 번호 (선택)"
                    />
                    <TextInput placeholder="국민은행 000-000000-000000" />
                </PaymentAccordion>
                <Button text="밥약 종료" />
            </Wrapper>
        </Container>
    );
};

export default ScheduledEvent;
