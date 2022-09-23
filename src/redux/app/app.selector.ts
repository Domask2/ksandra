import { RootState } from '../redux.store';

export const getInitialized = (state: RootState): boolean => state.app.initialized;
// export const getAuth = (state: RootState): IAuth => state.app.auth;
// export const getEditMode = (state: RootState): boolean => state.app.edit_mode;
// export const getAppDb = (state: RootState): any => state.app.db;
// export const getSettings = (state: RootState): any => state.app.setting;
