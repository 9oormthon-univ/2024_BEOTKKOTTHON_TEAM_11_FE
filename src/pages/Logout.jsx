import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice.js';

const Logout = ({}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate('/login');
    });

    return <></>;
};

export default Logout;
