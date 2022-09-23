import axios from 'axios';

const baseUrl = 'http://localhost:80';
export const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});
