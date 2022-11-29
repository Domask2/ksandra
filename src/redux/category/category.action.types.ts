import { categoryType } from '../../Page/Category/categoryType';

export enum CategoryActionsEnum {
    CATEGORY_SUCCESS = 'CATEGORY_SUCCESS',

    CATEGORY_STORE_SUCCESS = 'CATEGORY_STORE_SUCCESS',
    CATEGORY_STORE_FAILED = 'CATEGORY_STORE_FAILED',
    CATEGORY_STORE = 'CATEGORY_STORE',

    CATEGORY_UPDATE_SUCCESS = 'CATEGORY_UPDATE_SUCCESS',
    CATEGORY_UPDATE_FAILED = 'CATEGORY_UPDATE_FAILED',
    CATEGORY_UPDATE = 'CATEGORY_UPDATE',

    CATEGORY_DESTROY_SUCCESS = 'CATEGORY_DESTROY_SUCCESS',
    CATEGORY_DESTROY_FAILED = 'CATEGORY_DESTROY_FAILED',
    CATEGORY_DESTROY = 'CATEGORY_DESTROY',
}

export type CategorySuccessActionType = { type: typeof CategoryActionsEnum.CATEGORY_SUCCESS; category: categoryType };

export type CategoryStoreSuccessActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_STORE_SUCCESS;
    values: categoryType;
};
export type CategoryStoreFailedActionType = { type: typeof CategoryActionsEnum.CATEGORY_STORE_FAILED; message: string };
export type CategoryStoreActionType = { type: typeof CategoryActionsEnum.CATEGORY_STORE; values: categoryType };

export type CategoryUpdateSuccessActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_UPDATE_SUCCESS;
    id: number;
    values: categoryType;
};
export type CategoryUpdateFailedActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_UPDATE_FAILED;
    message: string;
};
export type CategoryUpdateActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_UPDATE;
    id: number;
    values: categoryType;
};

export type CategoryDestroySuccessActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_DESTROY_SUCCESS;
    id: number;
};
export type CategoryDestroyFailedActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_DESTROY_FAILED;
    message: string;
};
export type CategoryDestroyActionType = { type: typeof CategoryActionsEnum.CATEGORY_DESTROY; id: number };

export type CategoryActionCreatorsType =
    | CategorySuccessActionType
    | CategoryStoreSuccessActionType
    | CategoryStoreFailedActionType
    | CategoryStoreActionType
    | CategoryUpdateSuccessActionType
    | CategoryUpdateFailedActionType
    | CategoryUpdateActionType
    | CategoryDestroySuccessActionType
    | CategoryDestroyFailedActionType
    | CategoryDestroyActionType;
