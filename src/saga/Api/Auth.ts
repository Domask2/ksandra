import { instance } from './Api';

interface LoginInterface {
    email: string;
    name: string;
    role: string;
    token: string;
    projects_roles: string;
}

export const ApiApp = {
    initializeApp() {
        return instance.get<any>('/api/free/init').then((response) => response.data);
    },

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

    questions(values: FormData) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post(`/api/questions`, values).then((response) => response);
    },

    viewQuestions() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/view-questions`).then((response) => response);
    },

    viewQuestionsId(id: number) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/edit-questions/${id}`).then((response) => response);
    },

    editQuestionsId(id: number, values: FormData) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post(`/api/update-questions/${id}`, values).then((response) => response);
    },

    deleteQuestions(id: number) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.delete(`/api/delete-questions/${id}`).then((response) => response);
    },

    fetchQuestion(slug: string) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/fetchQuestion/${slug}`).then((response) => response);
    },

    fetchQuestionId(slug: string, id: string) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/fetchQuestionId/${slug}/${id}`).then((response) => response);
    },

    addQuantityQuestion(values: { question_id: number; question_quantity: number }) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post(`/api/addQuantityQuestion`, values).then((response) => response);
    },

    cart() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/cart`).then((response) => response);
    },

    updateCartQuantity(id: string, scope: string) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.put(`/api/cartUpdateQuantity/${id}/${scope}`).then((response) => response);
    },

    deleteCartItem(id: string) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.delete(`/api/deleteCartItem/${id}`).then((response) => response);
    },

    profile() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get(`/api/profile`).then((response) => response);
    },
};
