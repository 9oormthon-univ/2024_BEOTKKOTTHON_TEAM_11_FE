import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentHeader from '../components/ContentHeader.jsx';
import {
    BsCalendarPlusFill,
    BsCreditCard2BackFill,
    BsFillBookmarkPlusFill,
    BsFillBookmarkStarFill,
    BsJournalText,
    BsQuestionCircleFill,
    BsTagsFill,
} from 'react-icons/bs';
import BlockButton from '../components/BlockButton.jsx';
import _TextInput from '../components/TextInput.jsx';
import { IoMdPeople, IoMdPin } from 'react-icons/io';
import PaymentAccordion from '../components/PaymentAccordion.jsx';
import { getEvent, postFinishEvent } from '../api/event.js';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

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

    word-break: break-all;
    white-space: pre-wrap;
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

const Button = styled(BlockButton)`
    margin-top: 24px;

    &.hidden {
        display: none;
    }
`;

const TextInput = styled(_TextInput)`
    background-color: #ffffff;

    & > input {
        background-color: #ffffff;
    }
`;

const ScheduledEvent = ({}) => {
    const [name, setName] = useState('');
    const [remainingDays, setRemainingDays] = useState('');
    const [confirmDate, setConfirmDate] = useState(null);
    const [location, setLocation] = useState('');
    const [memo, setMemo] = useState('');
    const [participants, setParticipants] = useState([]);
    const [userRole, setUserRole] = useState('member');
    const [ownerId, setOwnerId] = useState(0);

    const [showPayment, setShowPayment] = useState(false);
    const [paymentMemo, setPaymentMemo] = useState('');
    const [paymentLink, setPaymentLink] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            let response;

            try {
                response = await getEvent({ token: '', id: 1 });
            } catch (e) {
                alert('밥약 정보를 불러오는데 실패했습니다.');
                return;
            }

            setName(response.name);
            setRemainingDays(response.remainingDays);
            setConfirmDate(response.confirmDate);
            setLocation(response.location);
            setMemo(response.memo);
            setParticipants(response.participants);
            setUserRole(response.userRole);
            setOwnerId(response.ownerId);
        })();
    }, []);

    const onInput = (dispatch) => (event) => dispatch(event.target.value);
    const onSubmit = async (event) => {
        if (showPayment && paymentMemo === '') {
            alert(
                '송금 정보에서 송금 메모는 필수 사항입니다. 송금 메모를 입력하거나 송금 정보를 체크 해제해주세요.'
            );
            return;
        }

        let response;

        try {
            response = await postFinishEvent({
                id: '',
                token: '',
                paymentMemo,
                paymentLink,
                accountNumber,
            });
        } catch (e) {
            alert('밥약 종료에 실패했습니다.');
            return;
        }

        alert('밥약이 종료된 밥약으로 이동되었습니다.');

        navigate('/');
    };

    const BadgeIcon =
        userRole === 'member' ? BsFillBookmarkPlusFill : BsFillBookmarkStarFill;
    const badgeText = userRole === 'member' ? '파티원' : '파티장';

    const ownerName = participants.find((item) => item.id === ownerId)?.name;
    const participantNames = participants
        .filter((item) => item.id !== ownerId)
        .map((item) => item.name)
        .join(' ');

    return (
        <Container>
            <Wrapper>
                <Header>{name}</Header>
                <BadgeContainer>
                    <Badge>D - {remainingDays}</Badge>
                    <Badge>
                        <BadgeIcon /> {badgeText}
                    </Badge>
                </BadgeContainer>
                <ContentHeader icon={<BsCalendarPlusFill />} text="밥약 일정" />
                <Item>
                    <ItemLine />
                    <ItemContent
                        style={{ fontSize: '24px', fontWeight: '600' }}
                    >
                        {dayjs(confirmDate).format(
                            'YYYY년 MM월 DD일\ndddd hh:mm'
                        )}
                    </ItemContent>
                </Item>
                <ContentHeader icon={<IoMdPin />} text="밥약 장소" />
                <Item>
                    <ItemLine />
                    <ItemContent
                        style={{ fontSize: '20px', fontWeight: '600' }}
                    >
                        {location}
                    </ItemContent>
                </Item>
                <ContentHeader icon={<IoMdPeople />} text="참여 인원" />
                <Item>
                    <ItemLine />
                    <ItemContent>
                        <MemberContainer>
                            <BsFillBookmarkStarFill />
                            <p>파티장</p>
                            <p style={{ fontSize: '18px' }}>{ownerName}</p>
                        </MemberContainer>
                        <MemberContainer>
                            <BsFillBookmarkPlusFill />
                            <p>파티원</p>
                            <p style={{ wordBreak: 'keep-all' }}>
                                {participantNames}
                            </p>
                        </MemberContainer>
                    </ItemContent>
                </Item>
                <ContentHeader icon={<BsJournalText />} text="밥약 메모" />
                <Item>
                    <ItemLine />
                    <ItemContent>{memo}</ItemContent>
                </Item>
                <PaymentAccordion
                    icon={<BsQuestionCircleFill />}
                    text="송금 정보를 제공할까요?"
                    value={showPayment}
                    hidden={userRole === 'member'}
                    onChange={(value) => setShowPayment(value)}
                >
                    <ContentHeader icon={<BsTagsFill />} text="송금 메모" />
                    <TextInput
                        placeholder="송금 관련한 메모를 작성해주세요"
                        value={paymentMemo}
                        onInput={onInput(setPaymentMemo)}
                    />
                    <ContentHeader
                        icon={<BsCreditCard2BackFill />}
                        text="송금 링크 (선택)"
                    />
                    <TextInput
                        placeholder="https://qr.kakaopay.com/000000"
                        value={paymentLink}
                        onInput={onInput(setPaymentLink)}
                    />
                    <ContentHeader
                        icon={<BsCreditCard2BackFill />}
                        text="계좌 번호 (선택)"
                    />
                    <TextInput
                        placeholder="국민은행 000-000000-000000"
                        value={accountNumber}
                        onInput={onInput(setAccountNumber)}
                    />
                </PaymentAccordion>
                <Button
                    text="밥약 종료"
                    onClick={onSubmit}
                    className={classNames({ hidden: userRole === 'member' })}
                />
            </Wrapper>
        </Container>
    );
};

export default ScheduledEvent;
