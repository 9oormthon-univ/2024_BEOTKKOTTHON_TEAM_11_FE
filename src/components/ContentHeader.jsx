import styled from 'styled-components';

const Container = styled.div`
    padding: 16px 8px;
    display: flex;
    align-items: center;
    color: #fe5858;

    gap: 12px;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
`;

const ContentHeader = ({ icon, text }) => {
    return (
        <Container>
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
        </Container>
    );
};

export default ContentHeader;
