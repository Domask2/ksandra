import * as React from 'react';
import { FunctionComponent as FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { Button, Form, Input } from 'antd';
import { initCategory, CategoryFormType } from './categoryType';

const CategoryForm: FC<CategoryFormType> = ({ setIsModalAdd }) => {
    const [form] = Form.useForm();
    const { categoryStoreAction } = useActions();

    const onFinish = (values) => {
        categoryStoreAction(values);
        setIsModalAdd(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            name="category_add"
            initialValues={initCategory}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="row-col"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
        >
            <Form.Item label={'Slug'} name="slug" rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}>
                <Input placeholder="Slug" />
            </Form.Item>
            <Form.Item label={'Name'} name="name" rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}>
                <Input placeholder="Name" />
            </Form.Item>

            <Form.Item label={'Description'} name="description">
                <Input placeholder="Description" />
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="primary" htmlType="submit">
                    Добавить категорию
                </Button>
            </div>
        </Form>
    );
};

export default CategoryForm;
