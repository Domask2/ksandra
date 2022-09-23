import { categoryType } from '../../Page/Category/categoryType';
import { instance } from './Api';

export const CategoryApi = {
    categoryStore(values: categoryType) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post('/api/category/store', values).then((response) => response);
    },

    categoryIndex() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get('api/category/index').then((response) => response);
    },

    categoryUpdate(id: number, values: categoryType) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.put(`/api/category/update/${id}`, values).then((response) => response);
    },

    categoryDestroy(id: number) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.delete(`/api/category/destroy/${id}`).then((response) => response);
    },
};
