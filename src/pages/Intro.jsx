import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import RiceBalloon from '../assets/images/rice_balloon.svg';
import ProcessTitle from '../components/ProcessTitle';
import ImageSliding from '../components/ImgSliding';

import ClockLogoImg from '../assets/images/clock_logo.svg';
import TextLogoImg from '../assets/images/textLogo.svg';
import img1 from '../assets/images/Intro/1_1.svg';
import img2 from '../assets/images/Intro/1_2.svg';
import img3 from '../assets/images/Intro/2_waiting_component.svg';
import img4 from '../assets/images/Intro/2_babyac_component.svg';
import img5 from '../assets/images/Intro/2_finished_component.svg';
import img6 from '../assets/images/Intro/3_share.svg';
import img7 from '../assets/images/Intro/4_return.svg';

import { BsEmojiLaughingFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/userSlice.js';

const Scroll = styled.div``;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
`;
const LogoImage = styled.img`
    width: 210px;
    height: 210px;
`;
/* //밥풍선
const LogoImage = styled.img`
width: 181px;
height: 159px;
`; */

const TextLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const Title = styled.div`
    color: #fe5858;
`;
const Text1 = styled.div`
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
/* const Text2 = styled.div`
font-Weight: 700;
font-size: 34px;
display: flex;
justify-content: center;
margin-top: 10px;
`; */
const Text3 = styled.div`
    font-weight: 500;
    font-size: 12px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const GraContainer1 = styled.div`
    background: linear-gradient(
        to bottom,
        #fe585800 0%,
        #fe58584d 30%,
        #fe585800 100%
    );
    height: 720px;
`;
const GraContainer2 = styled.div`
    background: linear-gradient(
        to bottom,
        #fe585800 0%,
        #fe58584d 30%,
        #fe585800 100%
    );
    height: 480px;
`;

const Container = styled.div`
    margin-top: 40px;
`;

const ImageSlidingContainer1 = styled.div`
    img {
        width: 290px !important; // 이미지 너비 조정
        height: 637px !important; // 이미지 높이 조정
        object-fit: cover; // 비율 유지
    }
`;

const ImageSlidingContainer2 = styled.div`
    img {
        width: 310px !important; // 이미지 너비 조정
        height: 165px !important; // 이미지 높이 조정
        object-fit: cover; // 비율 유지
    }
`;

const ImgDiv1 = styled.div`
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 290px;
    height: 400px;
`;

const ImgDiv2 = styled.div`
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 50px;
`;

const Text4 = styled.div`
    font-weight: 400;
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    color: #d64949;
`;
const Text5 = styled.div`
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: center;
    color: #d64949;
    margin-bottom: 70px;
`;

const Buttondiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`;

const CreateButton = styled.button`
    width: 329px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #fe5858;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        background-color: #cf3d3d;
    }
`;

function Intro() {
    const images1 = [img1, img2];
    const images2 = [img3, img4, img5];
    const navigate = useNavigate();

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Scroll>
            <LogoContainer>
                <LogoImage src={ClockLogoImg} />
            </LogoContainer>

            <Title>
                <Text1>모두의 밥약을 하나로 모으다</Text1>

                <TextLogoContainer>
                    <img src={TextLogoImg} alt="TextLogoImg" />
                </TextLogoContainer>

                {/* <Text2>
          이츠타임!
        </Text2> */}
                <Text3>쉽고 간편한 밥약 생성 / 관리 서비스</Text3>
            </Title>

            <GraContainer1>
                <Container>
                    <ProcessTitle
                        num="1"
                        title="쉽고 간편한 밥약 생성"
                        text="간편한 UI를 통해 쉽고 편하게 밥약을 만들수 있어요!!"
                    />
                    <ImageSlidingContainer1>
                        <ImageSliding images={images1} />
                    </ImageSlidingContainer1>
                </Container>
            </GraContainer1>

            <Container>
                <ProcessTitle
                    num="2"
                    title="밥약 상태별 관리"
                    text="상태별 페이지를 통해 여러 밥약도 손쉽게 파악 가능해요!"
                />
                <ImageSlidingContainer2>
                    <ImageSliding images={images2} />
                </ImageSlidingContainer2>
            </Container>

            <GraContainer2>
                <Container>
                    <ProcessTitle
                        num="3"
                        title="링크를 통해 밥약 공유"
                        text="링크를 통해 만든 밥약을 공유하고 초대할 수 있어요!"
                    />
                    <ImgDiv1>
                        <img src={img6} alt="밥약 공유 링크 사진" />
                    </ImgDiv1>
                </Container>
            </GraContainer2>

            <Container>
                <ProcessTitle
                    num="4"
                    title="보은 밥약 생성"
                    text="보은하기를 통해 즐거웠던 밥약을 다시 만들 수 있어요!"
                />
                <ImgDiv2>
                    <img src={img7} alt="보은 버튼" />
                </ImgDiv2>
            </Container>

            <Text4>로그인 후 무료로 이용이 가능합니다!!</Text4>
            <Text5>즐거운 이츠타임을 만들러 가볼까요??</Text5>
            <Buttondiv>
                <CreateButton
                    onClick={() =>
                        navigate(isLoggedIn ? '/events/scheduled' : '/login')
                    }
                >
                    <BsEmojiLaughingFill
                        size="24px"
                        style={{ marginRight: '10px' }}
                    />
                    밥약 만들러 가기!!
                </CreateButton>
            </Buttondiv>
        </Scroll>
    );
}

export default Intro;
