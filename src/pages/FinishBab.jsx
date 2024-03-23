import { useEffect, useState } from 'react';
import BabNavbar from '../components/BabNavbar';
import dummy from '../db/finishdata.json';
import FinishBox from '../components/FinishBox';
import { getBablist } from '../api/bablist.js';
import { useSelector } from 'react-redux';
import { selectId, selectToken } from '../redux/userSlice.js';

function FinishBab() {
    const token = useSelector(selectToken);
    const userId = useSelector(selectId);

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            if (token === null || userId === null) {
                return;
            }

            let response;

            try {
                response = await getBablist({
                    token,
                    userId,
                    state: 'EXPIRED',
                });
            } catch (e) {}

            setData(response);
        })();
    }, [token, userId]);

    return (
        <div>
            <BabNavbar />
            {data.map((item) => (
                <FinishBox key={item.id} event={item} />
            ))}
        </div>
    );
}

export default FinishBab;
