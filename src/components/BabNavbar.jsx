import React, { useState, useEffect } from 'react'; // useEffect를 추가로 import합니다.
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation을 추가로 import합니다.

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
  const navigate = useNavigate();
  const location = useLocation(); // 현재 위치(경로)를 가져옵니다.

  useEffect(() => {
    // location.pathname을 확인하여 상태를 업데이트합니다.
    if (location.pathname.includes('waitbab')) {
      setActiveButton('waiting');
    } else if (location.pathname.includes('confirmbab')) {
      setActiveButton('confirmed');
    } else if (location.pathname.includes('finishbab')) {
      setActiveButton('ended');
    } else {
      setActiveButton(''); // 경로가 일치하지 않는 경우 활성화된 버튼이 없도록 합니다.
    }
  }, [location]); // location이 변경될 때마다 이 effect를 다시 실행합니다.

  const handleClick = (buttonName, path) => {
    navigate(path);
  };

  return (
    <>
      <ButtonDiv>
        <BabyakButton
          $isActive={activeButton === 'waiting'}
          onClick={() => handleClick('waiting', '/waitbab')}
        >
          대기중 밥약
        </BabyakButton>
        <BabyakButton
          $isActive={activeButton === 'confirmed'}
          onClick={() => handleClick('confirmed', '/confirmbab')}
        >
          확정된 밥약
        </BabyakButton>
        <BabyakButton
          $isActive={activeButton === 'ended'}
          onClick={() => handleClick('ended', '/finishbab')}
        >
          종료된 밥약
        </BabyakButton>
      </ButtonDiv>
    </>
  );
}

export default BabNavbar;
