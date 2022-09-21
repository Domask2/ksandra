import { AppActionCreatorsType, AppActionsEnum } from './app.action.types';
import { IAppInitialized, initialStateApp } from './app.initial';

const appReducer = (state = initialStateApp, action: AppActionCreatorsType): IAppInitialized => {
    switch (action.type) {
        case AppActionsEnum.APP_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
                category: action.settings.category,
            };

        default:
            return state;
    }
};

export default appReducer;
