import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 17px;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 8px;

    color: #d64949;
    background-color: #fff6f6;

    /* &:hover {
        background-color: #ffdede;
    } */
`;

const Input = styled.input`
    border: 0;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;

    cursor: pointer;

    background-color: #fff6f6;

    &:hover {
        text-decoration: underline;
    }
`;

const Item = styled.div``;

const LinkButton = ({ value, onClick, additionalItem, ...props }) => {
    return (
        <Container {...props}>
            <Input onClick={onClick} value={value} />
            <Item>{additionalItem}</Item>
        </Container>
    );
};

export default LinkButton;
