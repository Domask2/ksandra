export interface ICategory {
    loading: boolean;
    error: boolean;
    message: string;
    category: any;
}

export const initialStateCategory: ICategory = {
    loading: false,
    error: false,
    message: '',
    category: [],
};
