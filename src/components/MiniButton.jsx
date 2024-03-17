import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    width: 41px;
    height: 24px;
    border: none;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: #fe5858;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.02em;

    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        background-color: #cf3d3d;
    }
`;

const MiniButton = ({ text, onClick }) => {
    return <Button onClick={onClick}>{text}</Button>;
};

export default MiniButton;
