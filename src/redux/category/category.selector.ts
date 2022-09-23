import { RootState } from '../redux.store';

export const getCategory = (state: RootState): any => state.category.category;
export const getCategoryLoading = (state: RootState): any => state.category;
