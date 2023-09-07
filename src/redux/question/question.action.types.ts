import { IQuestions } from '../../Page/Quest/questionType';

export enum QuestionActionsEnum {
    QUESTION_SUCCESS = 'QUESTION_SUCCESS',

    QUESTION_STORE = 'QUESTION_STORE',
    QUESTION_STORE_SUCCESS = 'QUESTION_STORE_SUCCESS',
    QUESTION_STORE_FAILED = 'QUESTION_STORE_FAILED',
}

export type QuestionSuccessActionType = {
    type: typeof QuestionActionsEnum.QUESTION_SUCCESS;
    question: IQuestions;
};

export type QuestionStoreActionType = {
    type: typeof QuestionActionsEnum.QUESTION_STORE;
    question: FormData;
};
export type QuestionStoreSuccessActionType = {
    type: typeof QuestionActionsEnum.QUESTION_STORE_SUCCESS;
    question;
};
export type QuestionStoreFailedActionType = {
    type: typeof QuestionActionsEnum.QUESTION_STORE_FAILED;
    message: string;
};

export type QuestionActionCreatorsType =
    | QuestionSuccessActionType
    | QuestionStoreActionType
    | QuestionStoreSuccessActionType
    | QuestionStoreFailedActionType;
