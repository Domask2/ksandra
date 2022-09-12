export interface CategoryFormType {
    setLoading: (load: boolean) => void;
    setIsModalAdd: (load: boolean) => void;
}

export interface CategoryModalAddType {
    setLoading: (load: boolean) => void;
    setIsModalAdd: (load: boolean) => void;
    isModalAdd: boolean;
}

export interface CategoryModalEditType {
    setLoading: (load: boolean) => void;
    setIsModalEdit: (load: boolean) => void;
    isModalEdit: boolean;
    currentCategory: categoryType;
}

export interface categoryType {
    id: number;
    name: string;
    slug: string;
    status: string;
    description: string;
    meta_title: string;
    meta_keyword: string;
    meta_descrip: string;
}

export const initCategory = {
    id: 0,
    name: '',
    slug: '',
    status: '',
    description: '',
    meta_title: '',
    meta_keyword: '',
    meta_descrip: '',
};
