export interface questionType {
    id: number;
    category_id: Blob | string;
    slug: string;
    name: string;
    description: string;
    meta_title: string;
    meta_keyword: string;
    meta_descrip: string;
    selling_price: string;
    origin_price: string;
    quantity: string;
    brand: string;
    featured: string;
    popular: string;
    status: string;
    image: any;
}

export const initForm = {
    id: null,
    category_id: '',
    slug: '',
    name: '',
    description: '',
    meta_title: '',
    meta_keyword: '',
    meta_descrip: '',
    selling_price: '',
    origin_price: '',
    quantity: '',
    brand: '',
    featured: '',
    popular: '',
    status: '',
    image: '',
};
