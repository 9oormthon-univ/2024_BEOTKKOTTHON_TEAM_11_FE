import styled from 'styled-components';
import React from 'react'; // React 임포트 추가
import { BsClipboard } from "react-icons/bs"; // 클립보드 아이콘을 위한 임포트

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
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

const Container = styled.div`
    position: relative; /* 버튼을 위한 포지셔닝 기준 추가 */
    width: 329px;
    height: 50px;
    padding: 17px;
    padding-right: 50px; /* 복사 버튼을 위한 공간 확보 */
    border-radius: 8px;
    font-weight: 400;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #d64949;
    background-color: #fff6f6;
`;

const StaticText = styled.div`
    flex-grow: 1;
    background-color: #fff6f6;
    color: #000; // 텍스트 색상
    padding: 10px; // 텍스트 주변 여백
    border-radius: 4px; // 테두리 둥글기
    margin-right: 60px; // 복사 버튼과의 간격
`;

const CopyButton = styled.button`
    position: absolute;
    right: 20px; /* 오른쪽 정렬 */
    top: 50%; /* 상위 컨테이너의 중앙 */
    transform: translateY(-50%); /* Y축 기준 중앙 정렬 */
    background: transparent;
    border: none;
    cursor: pointer;
    width: 41px;
    height: 24px;
    border-radius: 8px;
    background-color: #FE5858;
    color: #FFFFFF; /* 버튼 색상 조정 */
    font-size: 12px; /* 텍스트 크기 조정 */
    font-weight: 600;

    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        background-color: #cf3d3d;
    }
`;



const LinkBox = ({
    text,
    textHidden,
    link, // 링크를 props로 받음
    icon: Icon // Icon으로 이름 변경
}) => {
    // 복사 로직
    const handleCopy = () => {
        navigator.clipboard.writeText(link).then(() => {
            alert("복사되었습니다!");
        });
    };

    return (
    <>
        <TitleContainer>
            {Icon && <Icon size="24px" />}
            <Title>{text}</Title>
        </TitleContainer>
        <Container>
            <StaticText>
                {link} {/* 링크를 정적 텍스트로 표시 */}
            </StaticText>
            <CopyButton onClick={handleCopy}>
                복사
            </CopyButton>
        </Container>
    </>
    );
};

export default LinkBox;
