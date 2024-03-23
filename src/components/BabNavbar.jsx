import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const BabyakButton = styled.button`
    width: 105px;
    height: 29px;
    border: none;
    border-radius: 100px;
    margin: 5px;
    background-color: ${(props) => (props.$isActive ? '#FFF6F6' : '#FE5858')};
    color: ${(props) => (props.$isActive ? '#FE5858' : '#FFF6F6')};
    font-weight: 600;
    transition: background-color 0.1s;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.$isActive ? '#E8E8E8' : '#cf3d3d'};
        color: ${(props) => (props.$isActive ? '#FE5858' : '#FFF6F6')};
    }
`;

const ButtonDiv = styled.div`
    width: 345px;
    height: 40px;
    background-color: #fe5858;
    border-radius: 50px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function BabNavbar() {
    const [activeButton, setActiveButton] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/events/pending')) {
            setActiveButton('waiting');
        } else if (location.pathname.includes('/events/scheduled')) {
            setActiveButton('confirmed');
        } else if (location.pathname.includes('/events/result')) {
            setActiveButton('ended');
        } else {
            setActiveButton('');
        }
    }, [location]);

    const handleClick = (buttonName, path) => {
        navigate(path);
    };

    return (
        <>
            <ButtonDiv>
                <BabyakButton
                    $isActive={activeButton === 'waiting'}
                    onClick={() => handleClick('waiting', '/events/pending')}
                >
                    대기중 밥약
                </BabyakButton>
                <BabyakButton
                    $isActive={activeButton === 'confirmed'}
                    onClick={() =>
                        handleClick('confirmed', '/events/scheduled')
                    }
                >
                    확정된 밥약
                </BabyakButton>
                <BabyakButton
                    $isActive={activeButton === 'ended'}
                    onClick={() => handleClick('ended', '/events/result')}
                >
                    종료된 밥약
                </BabyakButton>
            </ButtonDiv>
        </>
    );
}

export default BabNavbar;
