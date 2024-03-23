import { getAxiosInstance } from './axios.js';

// 로그인 API 예제 함수입니다.
export async function postLogin(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     username: request.id,
    //     password: request.password,
    // };

    // const response = await axios.post('/api/v1/login', bodyData);

    // const data = {
    //     accessToken: response.headers.getAuthorization().split(' ')[1],
    //     userId: response.data.id,
    //     email: response.data.username,
    //     name: response.data.nickname,
    // };

    // return data;

    if (request.id !== 'admin') {
        throw new Error('아이디 오류');
    }

    if (request.password !== '1111') {
        throw new Error('비밀번호 오류');
    }

    return {
        accessToken: '1111',
        userId: 1,
        email: 'test@example.com',
        name: '테스트',
    };
}

export async function getMember(request) {
    // const axios = getAxiosInstance(request.token);

    // const response = await axios.get('/api/v1/members/{member_id}');

    // const data = {
    //     userId: response.data.id,
    //     email: response.data.username,
    //     name: response.data.nickname,
    // };

    // return data;

    return {
        userId: 1,
        email: 'test@example.com',
        name: '테스트',
    };
}

// 회원가입 API 예제 함수입니다.
export async function postRegister(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     nickname: request.name,
    //     username: request.id,
    //     password: request.password,
    // };

    // const response = await axios.post('/api/v1/signup', bodyData);
    // return response.data;

    return {
        status: 200,
    };
}

export async function postEmailVerification(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     email: request.email,
    //     univName: request.organization,
    // };

    // const response = await axios.post('/api/v1/verification', bodyData);
    // return response.data;

    return {
        success: true,
    };
}
export async function postEmailConfirmation(request) {
    // const axios = getAxiosInstance();

    // const bodyData = {
    //     email: request.email,
    //     univName: request.organization,
    //     code: Number(request.code),
    // };

    // const response = await axios.post('/api/v1/verificationCode', bodyData);

    // const data = {
    //     success: response.data.success,
    //     email: response.data.certified_email,
    //     organization: response.data.univName,
    //     date: response.data.certified_date,
    // };

    // return data;

    if (request.code !== '1111') {
        throw new Error({
            status: 400,
            success: false,
            message: '인증 코드 오류',
        });
    }

    return {
        success: true,
        email: request.email,
        organization: request.organization,
        date: '2023-01-03T09:30:22',
    };
}
