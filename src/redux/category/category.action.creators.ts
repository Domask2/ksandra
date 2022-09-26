import {
    CategoryActionsEnum,
    CategoryDestroyActionType,
    CategoryDestroyFailedActionType,
    CategoryDestroySuccessActionType,
    CategoryStoreActionType,
    CategoryStoreFailedActionType,
    CategoryStoreSuccessActionType,
    CategorySuccessActionType,
    CategoryUpdateActionType,
    CategoryUpdateFailedActionType,
    CategoryUpdateSuccessActionType,
} from './category.action.types';
import { ICategory } from './category.initial';
import { categoryType } from '../../Page/Category/categoryType';

const categoryActionCreators = {
    category: (category: categoryType): CategorySuccessActionType => ({
        type: CategoryActionsEnum.CATEGORY_SUCCESS,
        category,
    }),

    categoryStoreAction: (values: categoryType): CategoryStoreActionType => ({
        type: CategoryActionsEnum.CATEGORY_STORE,
        values,
    }),

    categoryStoreActionSuccess: (values: categoryType): CategoryStoreSuccessActionType => ({
        type: CategoryActionsEnum.CATEGORY_STORE_SUCCESS,
        values,
    }),

    categoryStoreActionFailed: (message: string): CategoryStoreFailedActionType => ({
        type: CategoryActionsEnum.CATEGORY_STORE_FAILED,
        message,
    }),

    categoryUpdateAction: (id: number, values: categoryType): CategoryUpdateActionType => ({
        type: CategoryActionsEnum.CATEGORY_UPDATE,
        values,
        id,
    }),

    categoryUpdateActionSuccess: (id: number, values: categoryType): CategoryUpdateSuccessActionType => ({
        type: CategoryActionsEnum.CATEGORY_UPDATE_SUCCESS,
        values,
        id,
    }),

    categoryUpdateActionFailed: (message: string): CategoryUpdateFailedActionType => ({
        type: CategoryActionsEnum.CATEGORY_UPDATE_FAILED,
        message,
    }),

    categoryDestroyAction: (id: number): CategoryDestroyActionType => ({
        type: CategoryActionsEnum.CATEGORY_DESTROY,
        id,
    }),

    categoryDestroyActionSuccess: (id: number): CategoryDestroySuccessActionType => ({
        type: CategoryActionsEnum.CATEGORY_DESTROY_SUCCESS,
        id,
    }),

    categoryDestroyActionFailed: (message: string): CategoryDestroyFailedActionType => ({
        type: CategoryActionsEnum.CATEGORY_DESTROY_FAILED,
        message,
    }),
};

export default categoryActionCreators;
