import { call, put, takeLatest } from 'redux-saga/effects';
import { errorNotification, successNotification } from '../source/notification';
import { QuestionActionsEnum } from '../redux/question/question.action.types';
import { QuestionApi } from './Api/QuestionApi';
import questionActionCreators from '../redux/question/question.action.creators';

const questionStoreSaga = function* (action: any) {
    try {
        const request = yield call(QuestionApi.questionStore, action.question);
        if (request.data.status === 200) {
            successNotification('top', '', request.data.message);
        } else if (request.data.status === 400) {
            errorNotification('top', '', request.data.error);
            return;
        } else if (request.data.status === 422) {
            errorNotification('top', '', request.data.errors);
            return;
        }

        yield put(questionActionCreators.questionStoreActionSuccess(request.data.question));
    } catch (e: any) {
        yield put(questionActionCreators.questionStoreActionFailed(e.message));
    }
};

function* questionSaga() {
    yield takeLatest(QuestionActionsEnum.QUESTION_STORE, questionStoreSaga);
}

export default questionSaga;
