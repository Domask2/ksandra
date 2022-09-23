import {
    CategoryActionsEnum,
    CategoryStoreActionType,
    CategoryStoreFailedActionType,
    CategoryStoreSuccessActionType,
    CategorySuccessActionType,
    CategoryUpdateActionType,
    CategoryUpdateFailedActionType,
    CategoryUpdateSuccessActionType,
} from './category.action.types';

const categoryActionCreators = {
    category: (category: any): CategorySuccessActionType => ({
        type: CategoryActionsEnum.CATEGORY_SUCCESS,
        category,
    }),

    categoryStoreAction: (values: any): CategoryStoreActionType => ({
        type: CategoryActionsEnum.CATEGORY_STORE,
        values,
    }),

    categoryStoreActionSuccess: (values: any): CategoryStoreSuccessActionType => ({
        type: CategoryActionsEnum.CATEGORY_STORE_SUCCESS,
        values,
    }),

    categoryStoreActionFailed: (message: string): CategoryStoreFailedActionType => ({
        type: CategoryActionsEnum.CATEGORY_STORE_FAILED,
        message,
    }),

    categoryUpdateAction: (id: number, values: any): CategoryUpdateActionType => ({
        type: CategoryActionsEnum.CATEGORY_UPDATE,
        values,
        id,
    }),

    categoryUpdateActionSuccess: (id: number, values: any): CategoryUpdateSuccessActionType => ({
        type: CategoryActionsEnum.CATEGORY_UPDATE_SUCCESS,
        values,
        id,
    }),

    categoryUpdateActionFailed: (message: string): CategoryUpdateFailedActionType => ({
        type: CategoryActionsEnum.CATEGORY_UPDATE_FAILED,
        message,
    }),
};

export default categoryActionCreators;
