import styled from 'styled-components';
import BlockButton from '../components/BlockButton.jsx';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    padding: 0 31px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px 24px;
`;

const Sitemap = ({}) => {
    const navigate = useNavigate();
    return (
        <Container>
            <BlockButton
                text="로그인"
                onClick={() => {
                    navigate('/login');
                }}
            />
            <BlockButton
                text="회원가입"
                onClick={() => {
                    navigate('/register');
                }}
            />
            <BlockButton
                text="밥약 목록"
                onClick={() => {
                    navigate('/waitbab');
                }}
            />
        </Container>
    );
};

export default Sitemap;
