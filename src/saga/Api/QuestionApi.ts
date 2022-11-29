import { categoryType } from '../../Page/Category/categoryType';
import { instance } from './Api';

export const QuestionApi = {
    questionStore(question: FormData) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.post('/api/question/store', question).then((response) => response);
    },

    questionIndex() {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.get('api/question/index').then((response) => response);
    },

    questionUpdate(id: number, values: categoryType) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.put(`/api/question/update/${id}`, values).then((response) => response);
    },

    questionDestroy(id: number) {
        console.log(id);
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('user-token');
        return instance.delete(`/api/question/destroy/${id}`).then((response) => response);
    },
};
