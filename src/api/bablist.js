import dayjs from 'dayjs';
import { getAxiosInstance } from './axios.js';

export async function getBablist(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.get(
        `/api/v1/members/${request.userId}/promises?state=${request.state}`
    );

    const data = response.data.map((item) => ({
        id: item.id,
        state: item.state,
        name: item.title,
        startDate: item.startDate,
        endDate: item.endDate,
        confirmDate:
            item.confirmedDate && item.confirmedTime
                ? dayjs(`${item.confirmedDate} ${item.confirmedTime}`)
                : null,
        location: item.locName,
        address: item.locAddress,
        ownerId: item.ownerId,
        participants: item.participants.map((item) => ({
            name: item.memberName,
            id: item.memberId,
        })),
        memo: item.memo,
        userRole: item.isLeader ? 'owner' : 'member',
        confirmCount: item.confirmedPeopleCount,
        allResponded: item.allResponded,
    }));

    return data;
}
