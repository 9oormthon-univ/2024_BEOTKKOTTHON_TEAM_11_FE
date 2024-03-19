import { getAxiosInstance } from './axios.js';

// 로그인 API 예제 함수입니다.
export async function postLogin(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     id: request.id,
    //     password: request.password,
    // };

    // const response = await axios.post('/login', bodyData);
    // return response.data;

    if (request.id !== 'admin') {
        throw new Error('아이디 오류');
    }

    if (request.password !== '1111') {
        throw new Error('비밀번호 오류');
    }

    return {
        access_token: '1111',
        refresh_token: '1111',
    };
}

// 회원가입 API 예제 함수입니다.
export async function postRegister(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     name: request.name,
    //     id: request.id,
    //     password: request.password,
    //     email: request.email,
    //     emailCode: request.emailCode,
    // };

    // const response = await axios.post('/register', bodyData);
    // return response.data;

    return {
        status: 200,
    };
}

export async function postEmailVerification(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     email: request.email,
    // };

    // const response = await axios.post('/emailVerification', bodyData);
    // return response.data;

    return {
        status: 200,
    };
}
export async function postEmailConfirmation(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     email: request.email,
    //     code: request.code,
    // };

    // const response = await axios.post('/emailConfirmation', bodyData);
    // return response.data;

    if (request.code !== '1111') {
        throw new Error('코드가 다름');
    }

    return {
        status: 200,
    };
}
