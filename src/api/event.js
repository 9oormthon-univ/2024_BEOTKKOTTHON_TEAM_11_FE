import dayjs from 'dayjs';
import { getAxiosInstance } from './axios.js';

export async function createEvent(request) {
    const axios = getAxiosInstance(request.token);

    const bodyData = {
        ownerId: request.userId,
        title: request.name,
        startDate: request.startDate,
        endDate: request.endDate, // 이 부분 빠져있음
        locName: request.location,
        locAddress: request.address,
        memo: request.memo,
    };

    const response = await axios.post('/api/v1/promises', bodyData);

    const data = {
        eventId: response.data,
    };

    return data;

    // return {
    //     eventId: 100,
    // };
}

export async function createEventUrl(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.get(
        `/api/v1/promises/${request.eventId}/link`
    );

    return { uuid: response.data.uuid };

    // return {
    //     uuid: '85e61cd0-59e2-44e6-b89c-79ddc248ae9c',
    // };
}

export async function getEvent(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.get(
        `/api/v1/promises/${request.eventId}/details/members/${request.userId}`
    );

    const data = {
        id: response.data.id,
        state: response.data.state,
        name: response.data.title,
        startDate: response.data.startDate,
        endDate: response.data.endDate,
        confirmDate:
            response.data.confirmedDate && response.data.confirmedTime
                ? dayjs(
                      `${response.data.confirmedDate} ${response.data.confirmedTime}`
                  )
                : null,
        location: response.data.locName,
        address: response.data.locAddress,
        ownerId: response.data.ownerId,
        participants: response.data.participants.map((item) => ({
            name: item.memberName,
            id: item.memberId,
        })),
        memo: response.data.memo,
        userRole: response.data.isLeader ? 'owner' : 'member',
        confirmCount: response.data.confirmedPeopleCount,
        allResponded: response.data.allResponded,
    };

    return data;

    // return {
    //     id: 101,
    //     name: '테스트 밥약',
    //     startDate: '2024-03-28',
    //     endDate: '2024-04-03',
    //     responseCount: 4,
    //     remainingDays: '3',
    //     confirmDate: '2024-03-25 12:00',
    //     location: '서울시 강남구',
    //     memo: '저희 뭐 먹을지 미리 생각해보는게 좋을 것 같습니다... 왜냐하면 만나서 생각하면 시간이 오래 걸릴 것 같아요... 근데 사실 이건 그냥 긴 내용이 필요한거라서 적은거니 그냥 신경쓰지 말아주세요',
    //     ownerId: 1,
    //     participants: [
    //         {
    //             name: '김경재',
    //             id: 1,
    //         },
    //         {
    //             name: '김남기',
    //             id: 2,
    //         },
    //         {
    //             name: '김현아',
    //             id: 3,
    //         },
    //         {
    //             name: '문성욱',
    //             id: 4,
    //         },
    //     ],
    //     userRole: 'owner',
    // };
}

export async function getPaymentInfo(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.get(
        `/api/v1/promises/${request.eventId}/payment`
    );

    const data = {
        paymentMemo: response.data.payMemo,
        paymentLink: response.data.kakaopayLink,
        accountNumber: response.data.bankAccount,
    };

    return data;

    // return {
    //     paymentMemo:
    //         '테스트님 10000원 테스트2님 50000원 테스트3님 100000000원 테스트4님 0원 부탁드립니다',
    //     paymentLink: 'https://example.com/kakaopay/1234567890',
    //     accountNumber: '신한은행 110-000000-000000 김경재',
    // };
}

export async function postEnterEvent(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.post(
        `/api/v1/members/${request.userId}/promises/${request.uuid}`
    );

    const data = {
        eventId: response.data,
    };

    return data;

    // return {
    //     eventId: 100,
    // };
}

export async function postConfirmEvent(request) {
    const axios = getAxiosInstance(request.token);

    const bodyData = {
        confirmedDate: request.date,
        confirmedTime: request.time,
    };

    const response = await axios.patch(
        `/api/v1/promises/${request.eventId}/confirmation`,
        bodyData
    );

    return response.data;

    // return {
    //     status: 200,
    // };
}

export async function postFinishEvent(request) {
    const axios = getAxiosInstance(request.token);

    const bodyData = {
        payMemo: request.paymentMemo,
        kakaopayLink: request.paymentLink,
        bankAccount: request.accountNumber,
    };

    const response = await axios.patch(
        `/api/v1/promises/${request.eventId}/termination`,
        bodyData
    );

    return response.data;

    // return {
    //     status: 200,
    // };
}
