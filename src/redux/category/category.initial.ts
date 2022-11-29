import { categoryType } from '../../Page/Category/categoryType';

export interface ICategory {
    loading: boolean;
    error: boolean;
    message: string;
    category: categoryType | Array<categoryType> | [];
}

export const initialStateCategory: ICategory = {
    loading: false,
    error: false,
    message: '',
    category: [],
};
