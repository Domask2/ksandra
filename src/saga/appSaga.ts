import { call, put, takeLatest } from 'redux-saga/effects';
import appActionCreators from '../redux/app/app.action.creators';
import categoryActionCreators from '../redux/category/category.action.creators';
import { AppActionsEnum } from '../redux/app/app.action.types';
import { ApiApp } from './Api/Auth';
import levelActionCreators from '../redux/level/level.action.creators';
import classificationActionCreators from '../redux/classification/classification.action.creators';

const initApp = function* (): any {
    try {
        const settings = yield call(ApiApp.initializeApp);
        yield put(appActionCreators.initializedSuccess(settings));
        yield put(categoryActionCreators.category(settings.category));
        yield put(levelActionCreators.level(settings.level));
        yield put(classificationActionCreators.classification(settings.classification));
    } catch (e: any) {
        yield put(appActionCreators.initializedFailed(e.message));
    }
};

function* appSaga() {
    yield takeLatest(AppActionsEnum.APP_INITIALIZE, initApp);
}

export default appSaga;
