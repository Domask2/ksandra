import axios from 'axios';

const baseUrl = 'http://localhost:80';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

interface LoginInterface {
    email: string;
    name: string;
    role: string;
    token: string;
}

export const ApiApp = {
    login(values: any) {
        return instance.post<LoginInterface>('/api/auth/login/', values).then((response) => response.data);
    },

    logup(values: any) {
        return instance.post<any>('/api/auth/register/', values).then((response) => response);
    },
};
