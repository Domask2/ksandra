import { call, put, takeLatest } from 'redux-saga/effects';
import categoryActionCreators from '../redux/category/category.action.creators';
import { CategoryActionsEnum } from '../redux/category/category.action.types';
import { CategoryApi } from './Api/CategoryApi';
import { errorNotification, successNotification } from '../source/notification';

const categoryStoreSaga = function* (action: any) {
    try {
        const request = yield call(CategoryApi.categoryStore, action.values);
        if (request.data.status === 200) {
            successNotification('top', '', request.data.message);
        } else if (request.data.status === 400) {
            errorNotification('top', '', request.data.errors);
            return;
        }
        yield put(categoryActionCreators.categoryStoreActionSuccess(action.values));
    } catch (e: any) {
        yield put(categoryActionCreators.categoryStoreActionFailed(e.message));
    }
};

function* categorySaga() {
    yield takeLatest(CategoryActionsEnum.CATEGORY_STORE, categoryStoreSaga);
}

export default categorySaga;
