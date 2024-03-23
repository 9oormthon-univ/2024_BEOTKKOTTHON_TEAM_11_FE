import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectId, selectIsLoggedIn, selectToken } from '../redux/userSlice.js';
import { postEnterEvent } from '../api/event.js';

const JoinEvent = ({}) => {
    const navigate = useNavigate();
    const { uuid } = useParams();
    const location = useLocation();
    const token = useSelector(selectToken);

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userId = useSelector(selectId);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login?redirect=' + location.pathname);
        } else {
            (async () => {
                let response;

                try {
                    response = await postEnterEvent({
                        token,
                        uuid,
                        userId,
                    });
                } catch (e) {
                    alert('밥약 참가에 실패했습니다. 다시 시도해주세요.');
                    return;
                }

                navigate(`/event/${response.eventId}/pending`);
            })();
        }
    }, [token, uuid, userId]);

    return <></>;
};

export default JoinEvent;
