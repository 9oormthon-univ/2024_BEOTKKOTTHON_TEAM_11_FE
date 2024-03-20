import { BsCheckCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const Container = styled.div`
    margin: 24px 0;
    padding: 12px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;

    gap: 12px;

    background-color: #fff6f6;
    color: #fe5858;
`;
const Line = styled.div`
    width: 3px;
    height: 32px;

    border-radius: 1px;

    background-color: #fe5858;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
        font-size: 24px;
    }
`;

const Text = styled.p`
    flex-grow: 1;
    font-size: 18px;
    font-weight: 700;
`;

const Callout = ({ icon = <BsCheckCircleFill />, text, ...props }) => {
    return (
        <Container {...props}>
            <Line>&nbsp;</Line>
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
        </Container>
    );
};

export default Callout;
