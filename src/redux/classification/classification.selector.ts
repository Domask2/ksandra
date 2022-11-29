import { RootState } from '../redux.store';

export const getClassification = (state: RootState): any => state.classification.classification;
