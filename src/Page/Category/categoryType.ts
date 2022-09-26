export interface CategoryFormType {
    setIsModalAdd: (load: boolean) => void;
}

export interface CategoryModalAddType {
    setIsModalAdd: (load: boolean) => void;
    isModalAdd: boolean;
}

export interface CategoryModalEditType {
    setIsModalEdit: (load: boolean) => void;
    isModalEdit: boolean;
    currentCategory: categoryType;
}

export interface categoryType {
    id: number;
    name: string;
    slug: string;
    description: string;
}

export const initCategory = {
    id: 0,
    name: '',
    slug: '',
    description: '',
};
