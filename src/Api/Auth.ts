import axios from 'axios';

const baseUrl = 'http://localhost:80';

export const instance = axios.create({
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
        return instance.post<LoginInterface>('/api/auth/login/', values).then((response) => response);
    },

    logup(values: any) {
        return instance.post<any>('/api/auth/register/', values).then((response) => response);
    },

    logout() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get<any>('/api/auth/logout').then((response) => response);
    },

    forgotPassword(values: any) {
        return instance.post<any>('/api/auth/forgot-password', values).then((response) => response.data);
    },

    resetPassword(values: any) {
        return instance.post<any>('/api/auth/reset-password/', values).then((response) => response.data);
    },

    category(values: any) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post('/api/questions-category', values).then((response) => response);
    },
};
