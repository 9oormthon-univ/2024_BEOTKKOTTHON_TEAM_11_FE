import axios from 'axios';
export const URL = import.meta.env.VITE_API_URL;

export function getAxiosInstance(token = null) {
    const options = {
        baseURL: URL,
    };

    if (token) {
        options.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return axios.create(options);
}

// multipart/form-data를 간편하게 생성하는 유틸리티 함수
export function createFormData(options) {
    const form = new FormData();

    for (const [key, value] of Object.entries(options)) {
        form.append(key, value);
    }

    return form;
}
