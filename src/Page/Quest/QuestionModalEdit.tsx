import * as React from 'react';
import { memo } from 'react';
import { Button, Form, Modal } from 'antd';
import { ApiApp } from '../../saga/Api/Auth';

import { successNotification } from '../../source/notification';

const QuestionModalEdit = ({ question, isModalEdit, setIsModalEdit, setLoading }: any) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        setIsModalEdit(false);
    };

    const handleCancel = () => {
        setIsModalEdit(false);
    };

    const onFinish = (values) => {
        const formData = new FormData();
        formData.append('image', values.image && values.image[0].originFileObj);
        values.category_id && formData.append('category_id', values.category_id);
        values.slug && formData.append('slug', values.slug);
        values.name && formData.append('name', values.name);
        values.description && formData.append('description', values.description);
        values.meta_title && formData.append('meta_title', values.meta_title);
        values.meta_keyword && formData.append('meta_keyword', values.meta_keyword);
        values.meta_descrip && formData.append('meta_descrip', values.meta_descrip);
        values.selling_price && formData.append('selling_price', values.selling_price);
        values.origin_price && formData.append('origin_price', values.origin_price);
        values.quantity && formData.append('quantity', values.quantity);
        values.brand && formData.append('brand', values.brand);
        values.featured && formData.append('featured', values.featured);
        values.popular && formData.append('popular', values.popular);
        values.status && formData.append('status', values.status);

        ApiApp.editQuestionsId(values.id, formData).then((res) => {
            if (res.status === 200) {
                successNotification('top', '', res.data.message);
                setIsModalEdit(false);
                setLoading(true);
            } else if (res.status === 422) {
                console.log(res.data.errors);
            }
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
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
                form={form}
                name="question_add"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="row-col"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
            >
                <Form.Item>
                    <Button style={{ width: '40%' }} type="primary" onClick={() => onFinish(form.getFieldsValue())}>
                        Edit Question
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default memo(QuestionModalEdit);
