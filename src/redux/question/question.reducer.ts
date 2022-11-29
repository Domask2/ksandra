import { initialStateQuestion } from './question.initial';
import { QuestionActionCreatorsType, QuestionActionsEnum } from './question.action.types';

const questionReducer = (state = initialStateQuestion, action: QuestionActionCreatorsType): any => {
    let question: any;
    switch (action.type) {
        case QuestionActionsEnum.QUESTION_SUCCESS:
            return {
                ...state,
                question: action.question,
            };

        case QuestionActionsEnum.QUESTION_STORE:
            return {
                ...state,
                loading: true,
            };
        case QuestionActionsEnum.QUESTION_STORE_SUCCESS:
            question = state.question;
            return {
                ...state,
                loading: false,
                question: [...question, action.question],
            };
        case QuestionActionsEnum.QUESTION_STORE_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};

export default questionReducer;
