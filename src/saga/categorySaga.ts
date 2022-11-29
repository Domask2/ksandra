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
            errorNotification('top', '', request.data.error);
            return;
        } else if (request.data.status === 422) {
            errorNotification('top', '', request.data.errors);
            return;
        }

        yield put(categoryActionCreators.categoryStoreActionSuccess(request.data.category));
    } catch (e: any) {
        yield put(categoryActionCreators.categoryStoreActionFailed(e.message));
    }
};

const categoryEditSaga = function* (action: any) {
    try {
        const request = yield call(CategoryApi.categoryUpdate, action.id, action.values);
        if (request.data.status === 200) {
            successNotification('top', '', request.data.message);
        } else if (request.data.status === 404) {
            errorNotification('top', '', request.data.error);
            return;
        }

        yield put(categoryActionCreators.categoryUpdateActionSuccess(action.id, action.values));
    } catch (e: any) {
        yield put(categoryActionCreators.categoryUpdateActionFailed(e.message));
    }
};

const categoryDestroySaga = function* (action: any) {
    try {
        const request = yield call(CategoryApi.categoryDestroy, action.id);
        if (request.data.status === 200) {
            successNotification('top', '', request.data.message);
        } else if (request.data.status === 404) {
            errorNotification('top', '', request.data.error);
            return;
        } else if (request.data.status === 422) {
            errorNotification('top', '', request.data.errors);
            return;
        }
        yield put(categoryActionCreators.categoryDestroyActionSuccess(action.id));
    } catch (e: any) {
        yield put(categoryActionCreators.categoryDestroyActionFailed(e.message));
    }
};

function* categorySaga() {
    yield takeLatest(CategoryActionsEnum.CATEGORY_STORE, categoryStoreSaga);
    yield takeLatest(CategoryActionsEnum.CATEGORY_UPDATE, categoryEditSaga);
    yield takeLatest(CategoryActionsEnum.CATEGORY_DESTROY, categoryDestroySaga);
}

export default categorySaga;
