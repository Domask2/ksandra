import { RootState } from '../redux.store';

export const getLevel = (state: RootState): any => state.level.level;
