import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
    transition: background-color 0.1s;
    cursor: pointer;

    &:hover {
        background-color: #cf3d3d;
    }

    ${props => props.variant === 'login' && css`
        background-color: #FE5858;
        color: #FFFFFF;

        &:hover {
            background-color: #cf3d3d; // 로그인 버튼의 호버 색상
        }
    `}

    ${props => props.variant === 'home' && css`
        background-color: #FFFFFF;
        color: #D64949;

        &:hover {
            background-color: #F0F0F0; // 홈 버튼에 적합한 호버 색상 조정
        }
    `}
`;

function CustomButton({ name, variant, onClick }) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {name}
    </StyledButton>
  );
}

export default CustomButton;
