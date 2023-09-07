import {
    AppActionsEnum,
    AppChangeEditModeActionType,
    AppInitializedActionType,
    AppInitializedFailedActionType,
    AppInitializedSuccessActionType,
    AppLoginActionType,
    AppLoginFailedActionType,
    AppLoginSuccessActionType,
    AppLogoutActionType,
    AppLogoutSuccessActionType,
    AppUpdateSettingsActionType,
    AppUpdateUserActionType,
    AppUpdateUserSuccessActionType,
} from './app.action.types';

const appActionCreators = {
    initializeApp: (): AppInitializedActionType => ({
        type: AppActionsEnum.APP_INITIALIZE,
    }),
    initializedSuccess: (settings: any): AppInitializedSuccessActionType => ({
        type: AppActionsEnum.APP_INITIALIZED_SUCCESS,
        settings,
    }),
    initializedFailed: (message: string): AppInitializedFailedActionType => ({
        type: AppActionsEnum.APP_INITIALIZED_FAILED,
        message,
    }),
    ////////////////////////////////////////////////////////////////////////////
    logoutSuccess: (): AppLogoutSuccessActionType => ({
        type: AppActionsEnum.AUTH_LOGOUT_SUCCESS,
    }),
    logout: (): AppLogoutActionType => ({ type: AppActionsEnum.AUTH_LOGOUT }),
    login: (values: any): AppLoginActionType => ({
        type: AppActionsEnum.AUTH_LOGIN,
        values,
    }),
    loginSuccess: (data: any): AppLoginSuccessActionType => ({
        type: AppActionsEnum.AUTH_LOGIN_SUCCESS,
        data,
    }),
    loginFailed: (message: string): AppLoginFailedActionType => ({
        type: AppActionsEnum.AUTH_LOGIN_FAILED,
        message,
    }),

    appChangeEditMode: (value: boolean): AppChangeEditModeActionType => ({
        type: AppActionsEnum.APP_CHANGE_EDIT_MODE,
        value,
    }),

    updateSettings: (data: any): AppUpdateSettingsActionType => ({
        type: AppActionsEnum.APP_UPDATE_SETTINGS,
        data,
    }),
    updateUser: (data: any, id: any): AppUpdateUserActionType => ({
        type: AppActionsEnum.APP_UPDATE_USER,
        data,
        id,
    }),
    updateUserSuccess: (user: any): AppUpdateUserSuccessActionType => ({
        type: AppActionsEnum.APP_UPDATE_USER_SUCCESS,
        user,
    }),
};

export default appActionCreators;
