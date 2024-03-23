import { getAxiosInstance } from './axios.js';

export async function getTimeTable(request) {
    const axios = getAxiosInstance(request.token);

    const response = await axios.get(
        `/api/v1/promises/${request.eventId}/members/${request.userId}`
    );

    return response.data;
}

export async function postTimeTable(request) {
    const axios = getAxiosInstance(request.token);

    const bodyData = request.list;

    const response = await axios.post(
        `/api/v1/promises/${request.eventId}/members/${request.userId}`,
        bodyData
    );

    return response.data;
}

export async function modifyTimeTable(request) {
    const axios = getAxiosInstance(request.token);

    const bodyData = request.list;

    const response = await axios.put(
        `/api/v1/promises/${request.eventId}/members/${request.userId}`,
        bodyData
    );

    return response.data;
}
