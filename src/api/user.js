import { createFormData, getAxiosInstance } from './axios.js';

export async function postLogin(request) {
    const axios = getAxiosInstance();

    const formData = createFormData({
        username: request.id,
        password: request.password,
    });

    const response = await axios.post('/api/v1/login', formData);

    const data = {
        accessToken: response.headers.getAuthorization().split(' ')[1],
    };

    return data;
}

export async function getMemberWithEmail(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.get(
        `/api/v1/memberByUsername/${request.email}`
    );

    const data = {
        userId: response.data.id,
        email: response.data.username,
        name: response.data.nickname,
    };

    return data;
}

export async function getMember(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.get('/api/v1/members/{member_id}');

    const data = {
        userId: response.data.id,
        email: response.data.username,
        name: response.data.nickname,
    };

    return data;
}

export async function postRegister(request) {
    const axios = getAxiosInstance();

    const bodyData = {
        username: request.id,
        password: request.password,
        nickname: request.name,
    };

    const response = await axios.post('/api/v1/signup', bodyData);
    return response.data;
}

export async function postEmailVerification(request) {
    const axios = getAxiosInstance();

    const bodyData = {
        email: request.email,
        univName: request.organization,
    };

    const response = await axios.post('/api/v1/verification', bodyData);
    return response.data;
}

export async function postEmailConfirmation(request) {
    const axios = getAxiosInstance();

    const bodyData = {
        email: request.email,
        univName: request.organization,
        code: Number(request.code),
    };

    const response = await axios.post('/api/v1/verificationCode', bodyData);

    const data = {
        success: response.data.success,
        email: response.data.certified_email,
        organization: response.data.univName,
        date: response.data.certified_date,
    };

    return data;

    // if (request.code !== '1111') {
    //     throw new Error({
    //         status: 400,
    //         success: false,
    //         message: '인증 코드 오류',
    //     });
    // }

    // return {
    //     success: true,
    //     email: request.email,
    //     organization: request.organization,
    //     date: '2023-01-03T09:30:22',
    // };
}
