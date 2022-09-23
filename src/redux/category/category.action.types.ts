export enum CategoryActionsEnum {
    CATEGORY_SUCCESS = 'CATEGORY_SUCCESS',
    CATEGORY_FAILED = 'CATEGORY_FAILED',
    CATEGORY = 'CATEGORY',

    CATEGORY_STORE_SUCCESS = 'CATEGORY_STORE_SUCCESS',
    CATEGORY_STORE_FAILED = 'CATEGORY_STORE_FAILED',
    CATEGORY_STORE = 'CATEGORY_STORE',

    CATEGORY_UPDATE_SUCCESS = 'CATEGORY_UPDATE_SUCCESS',
    CATEGORY_UPDATE_FAILED = 'CATEGORY_UPDATE_FAILED',
    CATEGORY_UPDATE = 'CATEGORY_UPDATE',
}

export type CategorySuccessActionType = { type: typeof CategoryActionsEnum.CATEGORY_SUCCESS; category: any };
export type CategoryFailedActionType = { type: typeof CategoryActionsEnum.CATEGORY_FAILED; message: string };
export type CategoryActionType = { type: typeof CategoryActionsEnum.CATEGORY };

export type CategoryStoreSuccessActionType = { type: typeof CategoryActionsEnum.CATEGORY_STORE_SUCCESS; values: any };
export type CategoryStoreFailedActionType = { type: typeof CategoryActionsEnum.CATEGORY_STORE_FAILED; message: string };
export type CategoryStoreActionType = { type: typeof CategoryActionsEnum.CATEGORY_STORE; values: any };

export type CategoryUpdateSuccessActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_UPDATE_SUCCESS;
    id: number;
    values: any;
};
export type CategoryUpdateFailedActionType = {
    type: typeof CategoryActionsEnum.CATEGORY_UPDATE_FAILED;
    message: string;
};
export type CategoryUpdateActionType = { type: typeof CategoryActionsEnum.CATEGORY_UPDATE; id: number; values: any };

export type CategoryActionCreatorsType =
    | CategorySuccessActionType
    | CategoryFailedActionType
    | CategoryActionType
    | CategoryStoreSuccessActionType
    | CategoryStoreFailedActionType
    | CategoryStoreActionType
    | CategoryUpdateSuccessActionType
    | CategoryUpdateFailedActionType
    | CategoryUpdateActionType;
