import { CategoryActionCreatorsType, CategoryActionsEnum } from './category.action.types';
import { ICategory, initialStateCategory } from './category.initial';

const categoryReducer = (state = initialStateCategory, action: CategoryActionCreatorsType): ICategory => {
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
            return {
                ...state,
                loading: false,
                category: [...state.category, action.values],
            };
        case CategoryActionsEnum.CATEGORY_STORE_FAILED:
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
