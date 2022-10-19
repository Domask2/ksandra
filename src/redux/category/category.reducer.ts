import { CategoryActionCreatorsType, CategoryActionsEnum } from './category.action.types';
import { ICategory, initialStateCategory } from './category.initial';

const categoryReducer = (state = initialStateCategory, action: CategoryActionCreatorsType): ICategory => {
    let category;
    switch (action.type) {
        case CategoryActionsEnum.CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.category,
            };

        case CategoryActionsEnum.CATEGORY_STORE:
            return {
                ...state,
                loading: true,
            };
        case CategoryActionsEnum.CATEGORY_STORE_SUCCESS:
            category = state.category;
            return {
                ...state,
                loading: false,
                // category: [...category, action.values],
            };
        case CategoryActionsEnum.CATEGORY_STORE_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case CategoryActionsEnum.CATEGORY_UPDATE:
            return {
                ...state,
                loading: true,
            };
        case CategoryActionsEnum.CATEGORY_UPDATE_SUCCESS:
            category = state.category;
            category.forEach((cat, index) => {
                if (cat.id === action.id) {
                    category[index] = action.values;
                }
            });
            return {
                ...state,
                loading: false,
                category: category,
            };
        case CategoryActionsEnum.CATEGORY_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case CategoryActionsEnum.CATEGORY_DESTROY:
            return {
                ...state,
                loading: true,
            };
        case CategoryActionsEnum.CATEGORY_DESTROY_SUCCESS:
            category = state.category;
            category.forEach((cat, index) => {
                if (cat.id === action.id) {
                    category.splice(index, 1);
                }
            });
            return {
                ...state,
                loading: false,
                category: category,
            };
        case CategoryActionsEnum.CATEGORY_DESTROY_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default categoryReducer;
