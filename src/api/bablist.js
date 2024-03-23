import axios from 'axios';

export async function getBablist(request) {
    try {
        const axios = getAxiosInstance(request.token);

        const response = await axios.get(`/api/v1/members/${request.userId}/promises?state=${request.state}`);

        const data = response.data.map(item => ({
            id: item.id,
            state: item.state,
            name: item.title,
            isLeader: item.isLeader,
            date: item.confirmedDate ? `${item.confirmedDate} ${item.confirmedTime}` : null, // 날짜와 시간 결합
            place: item.locName,
            confirmedPeopleCount: item.confirmedPeopleCount,
            allResponded: item.allResponded,
            // 기타 필요한 데이터 처리
        }));        

        return data;
    } catch (error) {
        console.error('Error fetching bablist data:', error);
        throw error; // 에러 처리는 프로젝트의 필요에 따라 달라질 수 있습니다.
    }
}


/* export async function getBablist(request) {
    const response = await axios.get(`/api/v1/promises/${promise_id}`)

    const data = {
        id: response.data.id,
        state: response.data.state,
        name: response.data.title,
        
        date: response.data.confirmedDate.confirmedTime, //이게 가능한가?
        place: response.data.locName,
        
        //isLeader, dateStatus, confirmedPeopleCount, allResponded 없음
    };
} */

/* {
    "id": 1,
    "state": "PENDING", //{PENDING, CONFIRMED, EXPIRED}
    "title": "밥약 제목",
    "ownerName": "파티장이름",
    "confirmedDate": "2024-03-24", //PENDING이면 null
    "confirmedTime": "13:00", //PENDING이면 null
    "locName": "장소 이름",
    "locAddress": "도로명 주소",
    "memo": "밥약메모",
    "participants": [
        {
            "memberId": 1,
            "memberName": "김남기"
        }
    ]
} */