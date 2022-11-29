import { IQuestions } from '../../Page/Quest/questionType';

export interface IStateQuestion {
    loading: boolean;
    error: boolean;
    message: string;
    question: IQuestions[] | [];
}

export const initialStateQuestion: IStateQuestion = {
    loading: false,
    error: false,
    message: '',
    question: [],
};
