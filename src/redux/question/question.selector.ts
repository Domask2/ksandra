import { RootState } from '../redux.store';

export const getQuestion = (state: RootState): any => state.question.question;
export const getQuestionLoading = (state: RootState): any => state.question.loading;
