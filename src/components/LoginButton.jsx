// CustomButton.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;

    ${props => props.variant === 'login' && css`
        background-color: #FE5858;
        color: #FFFFFF;
    `}

    ${props => props.variant === 'home' && css`
        background-color: #FFFFFF;
        color: #D64949;
    `}
`;

function CustomButton({ name, variant, onClick  }) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {name}
    </StyledButton>
  );
}

export default CustomButton;
