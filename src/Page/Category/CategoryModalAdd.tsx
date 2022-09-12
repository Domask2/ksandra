import * as React from 'react';
import { FunctionComponent as FC } from 'react';
import { Modal } from 'antd';
import { CategoryModalAddType } from './categoryType';
import CategoryForm from './CategoryForm';

const CategoryModalAdd: FC<CategoryModalAddType> = ({ isModalAdd, setIsModalAdd, setLoading }) => {
    const handleOk = () => {
        setIsModalAdd(false);
    };

    const handleCancel = () => {
        setIsModalAdd(false);
    };

    return (
        <Modal
            destroyOnClose
            title="Edit Category Modal"
            maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            visible={isModalAdd}
            footer={false}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <CategoryForm setIsModalAdd={setIsModalAdd} setLoading={setLoading} />
        </Modal>
    );
};

export default CategoryModalAdd;
