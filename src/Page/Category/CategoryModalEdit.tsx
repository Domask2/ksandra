import * as React from 'react';
import { FunctionComponent as FC } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { ApiApp } from '../../saga/Api/Auth';
import { errorNotification, successNotification } from '../../source/notification';
import { CategoryModalEditType } from './categoryType';

const CategoryModalEdit: FC<CategoryModalEditType> = ({ currentCategory, isModalEdit, setIsModalEdit, setLoading }) => {
    const handleOk = () => {
        setIsModalEdit(false);
    };

    const handleCancel = () => {
        setIsModalEdit(false);
    };

    const onFinishModal = (values) => {
        setIsModalEdit(false);
        ApiApp.updateCategory(currentCategory.id, values).then((res) => {
            if (res.data.status === 200) {
                setLoading(true);
                successNotification('top', '', res.data.message);
            } else if (res.data.status === 422) {
                errorNotification('top', '', res.data.errors);
            }
        });
    };

    return (
        <Modal
            destroyOnClose
            title="Edit Category Modal"
            maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            visible={isModalEdit}
            footer={false}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form
                preserve={false}
                onFinish={onFinishModal}
                name="category_edit"
                className="row-col"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
            >
                <Form.Item
                    initialValue={currentCategory.slug}
                    label={'Slug'}
                    name="slug"
                    rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}
                >
                    <Input placeholder="Slug" />
                </Form.Item>
                <Form.Item
                    initialValue={currentCategory.name}
                    label={'Name'}
                    name="name"
                    rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}
                >
                    <Input placeholder="Name" />
                </Form.Item>

                <Form.Item initialValue={currentCategory.description} label={'Description'} name="description">
                    <Input placeholder="Description" />
                </Form.Item>

                <Form.Item initialValue={currentCategory.status} label={'Status'} name="status">
                    <Input placeholder="Status" />
                </Form.Item>

                <Form.Item
                    initialValue={currentCategory.meta_title}
                    label={'meta_title'}
                    name="meta_title"
                    rules={[{ required: true, message: 'Пожалуйста введите meta_title!' }]}
                >
                    <Input placeholder="meta_title" />
                </Form.Item>

                <Form.Item initialValue={currentCategory.meta_keyword} label={'meta_keyword'} name="meta_keyword">
                    <Input placeholder="meta_keyword" />
                </Form.Item>

                <Form.Item initialValue={currentCategory.meta_descrip} label={'meta_descrip'} name="meta_descrip">
                    <Input placeholder="meta_descrip" />
                </Form.Item>

                <Form.Item initialValue={currentCategory.id} hidden={true} label={'id'} name="id">
                    <Input placeholder="id" />
                </Form.Item>

                <Form.Item>
                    <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CategoryModalEdit;
