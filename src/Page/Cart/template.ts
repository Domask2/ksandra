import { questionType } from '../AddQuestions/type-question';

export interface CartType {
    id: string;
    question: questionType;
    user_id: string;
    question_id: string;
    question_quantity: string;
}

export const initCart = {
    id: '',
    question: {},
    user_id: '',
    question_id: '',
    question_quantity: '',
};
