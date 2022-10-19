import { call, put, takeLatest } from 'redux-saga/effects';
import appActionCreators from '../redux/app/app.action.creators';
import categoryActionCreators from '../redux/category/category.action.creators';
import levelActionCreators from '../redux/level/level.action.creators';
import classificationActionCreators from '../redux/classification/classification.action.creators';
import questionActionCreators from '../redux/question/question.action.creators';
import { ApiApp } from './Api/Auth';
import { AppActionsEnum } from '../redux/app/app.action.types';

const initApp = function* (): any {
    try {
        const settings = yield call(ApiApp.initializeApp);
        yield put(appActionCreators.initializedSuccess(settings));
        yield put(categoryActionCreators.category(settings.category));
        yield put(levelActionCreators.level(settings.level));
        yield put(classificationActionCreators.classification(settings.classification));
        yield put(questionActionCreators.question(settings.questions));
    } catch (e: any) {
        yield put(appActionCreators.initializedFailed(e.message));
    }
};

function* appSaga() {
    yield takeLatest(AppActionsEnum.APP_INITIALIZE, initApp);
}

export default appSaga;
