import { getAxiosInstance } from './axios.js';

// 로그인 API 예제 함수입니다.
export async function postLogin(request) {
    const axios = getAxiosInstance();

    const bodyData = {
        id: request.id,
        password: request.password,
    };

    const response = await axios.post('/login', bodyData);
    return response.data;
}

// 회원가입 API 예제 함수입니다.
export async function postRegister(request) {
    const axios = getAxiosInstance();

    const bodyData = {
        id: request.id,
        password: request.password,
        name: request.name,
        email: request.email,
        phone: request.phone,
    };

    const response = await axios.post('/register', bodyData);
    return response.data;
}
