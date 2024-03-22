import React from 'react'
import styled from 'styled-components';

const TextBox = styled.div`
    color: #D64949; 
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: center; // 자식 요소를 가로 방향으로 가운데 정렬
    margin-top: 10px; 
    margin-left: auto; 
    margin-right: auto;
`;

function TextboxMini({text}) {
  return (
    <TextBox>
      <p>{text}</p>
    </TextBox>
  );
}

export default TextboxMini
