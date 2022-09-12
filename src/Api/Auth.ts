import axios from 'axios';
import { categoryType } from '../Page/Category/categoryType';

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

    category(values: categoryType) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post('/api/questions-category', values).then((response) => response);
    },

    viewCategory() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get('api/view-category').then((response) => response);
    },

    allCategory() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/all-category`).then((response) => response);
    },

    viewCategoryId(id: number) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/edit-category/${id}`).then((response) => response);
    },

    updateCategory(id: number, values: categoryType) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.put(`/api/update-category/${id}`, values).then((response) => response);
    },

    deleteCategory(id: number) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.delete(`/api/delete-category/${id}`).then((response) => response);
    },

    questions(values: any) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post(`/api/questions`, values).then((response) => response);
    },
};
