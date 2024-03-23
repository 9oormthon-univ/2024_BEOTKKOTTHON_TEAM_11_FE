import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the animations
const slideIn = keyframes`
  from {
    transform: translateX(100%); // 오른쪽에서 시작
    opacity: 0;
  }
  to {
    transform: translateX(0); // 중앙으로
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0); // 중앙에서 시작
    opacity: 1;
  }
  to {
    transform: translateX(-100%); // 왼쪽으로
    opacity: 0;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
`;

const Image = styled.img`

  opacity: 0;
  animation: ${props => props.isEntering ? slideIn : slideOut} 2s forwards;
`;

const ImageSliding = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isEntering, setIsEntering] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsEntering(false); // 슬라이드 아웃 시작
  
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % images.length); // 다음 이미지로 인덱스 업데이트
          setIsEntering(true); // 다음 이미지 슬라이드 인 시작
        }, 1500); // 슬라이드 아웃 지속 시간이 1초이므로, 이 시간이 지난 후 다음 이미지로 넘어가기 시작
      }, 7000); // 슬라이드 인(1초) + 이미지 표시(4초) + 슬라이드 아웃(1초) = 총 6초 간격
  
      return () => clearInterval(interval);
    }, [currentIndex, images.length]);
  
    return (
      <Container>
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Slide ${index}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
            isEntering={isEntering}
          />
        ))}
      </Container>
    );
  };
  
export default ImageSliding;