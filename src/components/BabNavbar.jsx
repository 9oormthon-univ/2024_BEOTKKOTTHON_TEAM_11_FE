import React, { useState } from 'react';
import styled from 'styled-components';

const BabyakButton = styled.button`
  width: 105px;
  height: 29px;
  border: none;
  border-radius: 100px;
  margin: 5px;
  background-color: ${props => props.$isActive ? '#FFF6F6' : '#FE5858'};
  color: ${props => props.$isActive ? '#FE5858' : '#FFF6F6'};
  font-weight: 600;
`;

const ButtonDiv = styled.div`
  width: 345px;
  height: 40px;
  background-color: #FE5858;
  border-radius: 50px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BabNavbar() {
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (buttonName) => {
    setActiveButton(current => current === buttonName ? '' : buttonName);
  };

  return (
    <>
      <ButtonDiv>
        <BabyakButton
          $isActive={activeButton === 'waiting'}
          onClick={() => handleClick('waiting')}
        >
          대기중 밥약
        </BabyakButton>
        <BabyakButton
          $isActive={activeButton === 'confirmed'}
          onClick={() => handleClick('confirmed')}
        >
          확정된 밥약
        </BabyakButton>
        <BabyakButton
          $isActive={activeButton === 'ended'}
          onClick={() => handleClick('ended')}
        >
          종료된 밥약
        </BabyakButton>
      </ButtonDiv>
    </>
  );
}

export default BabNavbar;
