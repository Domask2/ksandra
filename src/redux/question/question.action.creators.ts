import { IQuestions } from '../../Page/Quest/questionType';
import {
    QuestionActionsEnum,
    QuestionStoreActionType,
    QuestionStoreFailedActionType,
    QuestionStoreSuccessActionType,
    QuestionSuccessActionType,
} from './question.action.types';

const questionActionCreators = {
    question: (question: IQuestions): QuestionSuccessActionType => ({
        type: QuestionActionsEnum.QUESTION_SUCCESS,
        question,
    }),

    questionStoreAction: (question: FormData): QuestionStoreActionType => ({
        type: QuestionActionsEnum.QUESTION_STORE,
        question,
    }),

    questionStoreActionSuccess: (question: IQuestions): QuestionStoreSuccessActionType => ({
        type: QuestionActionsEnum.QUESTION_STORE_SUCCESS,
        question,
    }),

    questionStoreActionFailed: (message: string): QuestionStoreFailedActionType => ({
        type: QuestionActionsEnum.QUESTION_STORE_FAILED,
        message,
    }),
};

export default questionActionCreators;
