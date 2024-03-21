import React from 'react'
import riceBalloon from '../assets/images/riceBalloon_notail.png'
import styled from 'styled-components'
import TextboxMini from '../components/TextboxMini.jsx';
import LinkBox from '../components/LinkBox.jsx';
import { BsFillShareFill } from "react-icons/bs";

const LogoDiv = styled.div`
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 100px; 
    margin-left: auto; 
    margin-right: auto;
`;

const TextDiv = styled.div`
    margin-top: 48px;
`;

const LinkContainer = styled.div`
margin-top: 40px;
`;

function ShareBab() {
  return (
    <>
        <LogoDiv>
            <img src={riceBalloon} alt="Rice Balloon" />
        </LogoDiv>
        <TextDiv>
            <TextboxMini text="밥약이 만들어졌어요!!"></TextboxMini>
            <TextboxMini text="하단의 링크를 통해 공유해보아요!!"></TextboxMini>
        </TextDiv>
        <LinkContainer>
            <LinkBox icon={BsFillShareFill} text="밥약 공유 링크" placeholder="https://www.youtube.com/wa"></LinkBox>
        </LinkContainer>
        
    </>
  )
}

export default ShareBab
