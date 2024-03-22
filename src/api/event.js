import dayjs from 'dayjs';

export async function createEvent(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     ownerId: request.userId,
    //     title: request.name,
    //     startDate: request.startDate,
    //     locName: request.location,
    //     locAddress: request.address,
    //     memo: request.memo,
    // };

    // const response = await axios.post('/api/v1/promises', bodyData);
    // return response.data;

    return {
        url: 'https://example.com',
    };
}

export async function getEvent(request) {
    // const axios = getAxiosInstance(request.token);

    // const response = await axios.get(`/api/v1/promises/${request.id}`);

    // const data = {
    //     id: response.data.id,
    //     name: response.data.eventName,
    //     startDate: response.data.prefer_starttime,
    //     remainingDays: response.data.dDay,
    //     confirmDate:
    //         response.data.date && response.data.time
    //             ? dayjs(`${response.data.date} ${response.data.time}`)
    //             : null,
    //     location: response.data.place,
    //     ownerId: response.data.host,
    //     participants: response.data.participants,
    //     userRole: response.data.userRole,
    // };

    // 메모 누락

    // return data;

    return {
        id: 101,
        name: '테스트 밥약',
        startDate: '2024-03-22',
        remainingDays: '3',
        confirmDate: '2024-03-25 12:00',
        location: '서울시 강남구',
        memo: '저희 뭐 먹을지 미리 생각해보는게 좋을 것 같습니다... 왜냐하면 만나서 생각하면 시간이 오래 걸릴 것 같아요... 근데 사실 이건 그냥 긴 내용이 필요한거라서 적은거니 그냥 신경쓰지 말아주세요',
        ownerId: 1,
        participants: [
            {
                name: '김경재',
                id: 1,
            },
            {
                name: '김남기',
                id: 2,
            },
            {
                name: '김현아',
                id: 3,
            },
            {
                name: '문성욱',
                id: 4,
            },
            {
                name: '박지환',
                id: 5,
            },
            {
                name: '유지희',
                id: 6,
            },
            {
                name: '아무이름',
                id: 7,
            },
            {
                name: '아무이름',
                id: 8,
            },
            {
                name: '아무이름',
                id: 9,
            },
            {
                name: '아무이름',
                id: 10,
            },
        ],
        userRole: 'owner',
    };
}

export async function postFinishEvent(request) {
    // const axios = getAxiosInstance(request.token);

    // const bodyData = {
    //     payMemo: request.paymentMemo,
    //     kakaopayLink: request.paymentLink,
    //     bankAccount: request.accountNumber,
    // };

    // const response = await axios.post(
    //     `/api/v1/promises/${request.id}/termination`,
    //     bodyData
    // );

    // return response.data;

    return {
        status: 200,
    };
}
