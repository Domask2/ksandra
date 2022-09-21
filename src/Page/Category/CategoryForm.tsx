import * as React from 'react';
import { FunctionComponent as FC } from 'react';
import { Button, Form, Input } from 'antd';
import { ApiApp } from '../../saga/Api/Auth';
import { errorNotification, successNotification } from '../../source/notification';
import { initCategory, CategoryFormType } from './categoryType';

const CategoryForm: FC<CategoryFormType> = ({ setIsModalAdd, setLoading }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        ApiApp.category(values).then((res) => {
            if (res.data.status === 200) {
                if (res.data.message && typeof res.data.message === 'string') {
                    successNotification('top', '', res.data.message);
                    setIsModalAdd(false);
                    setLoading(true);
                }
                form.resetFields();
            } else if (res.data.status === 400) {
                errorNotification('top', '', res.data.errors);
            }
        });
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

            <Form.Item label={'Status'} name="status">
                <Input placeholder="Status" />
            </Form.Item>

            <Form.Item
                label={'meta_title'}
                name="meta_title"
                rules={[{ required: true, message: 'Пожалуйста введите meta_title!' }]}
            >
                <Input placeholder="meta_title" />
            </Form.Item>

            <Form.Item label={'meta_keyword'} name="meta_keyword">
                <Input placeholder="meta_keyword" />
            </Form.Item>

            <Form.Item label={'meta_descrip'} name="meta_descrip">
                <Input placeholder="meta_descrip" />
            </Form.Item>

            <Form.Item>
                <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                    Добавить категорию
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CategoryForm;
