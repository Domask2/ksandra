import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import appActionCreators from '../redux/app/app.action.creators';

import { AppActionsEnum } from '../redux/app/app.action.types';
import { ApiApp } from './Api/Auth';

const initApp = function* (): any {
    try {
        const settings = yield call(ApiApp.initializeApp);
        yield put(appActionCreators.initializedSuccess(settings));
    } catch (e: any) {
        yield put(appActionCreators.initializedFailed(e.message));
    }
};

function* mySaga() {
    /** ----- App ----- */
    yield takeLatest(AppActionsEnum.APP_INITIALIZE, initApp);
    /** ----- App ----- */
}

export default mySaga;
