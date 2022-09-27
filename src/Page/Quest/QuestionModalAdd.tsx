import * as React from 'react';
import { memo } from 'react';
import { Button, Form, Modal, Select } from 'antd';
import { ApiApp } from '../../saga/Api/Auth';

import { successNotification } from '../../source/notification';
import { categoryType } from '../Category/categoryType';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../redux/redux.store';
import { getCategory } from '../../redux/category/category.selector';
import { getLevel } from '../../redux/level/level.selector';
import { getClassification } from '../../redux/classification/classification.selector';

const QuestionModalAdd = ({ isModalAdd, setIsModalAdd }: any) => {
    const [form] = Form.useForm();
    const categories = useTypedSelector((state: RootState) => getCategory(state));
    const levels = useTypedSelector((state: RootState) => getLevel(state));
    const classifications = useTypedSelector((state: RootState) => getClassification(state));

    const handleOk = () => {
        setIsModalAdd(false);
    };

    const handleCancel = () => {
        setIsModalAdd(false);
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
                setIsModalAdd(false);
                // setLoading(true);
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
            title="Добавить вопрос"
            maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            visible={isModalAdd}
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
                <Form.Item
                    label={'Категория'}
                    name={'category_id'}
                    rules={[{ required: true, message: 'Пожалуйста выберите категорию!' }]}
                >
                    <Select placeholder="Выберите категорию!">
                        {categories?.length &&
                            categories.map((cat: categoryType) => {
                                return (
                                    <Select.Option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </Select.Option>
                                );
                            })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={'Сложность'}
                    name={'level_id'}
                    rules={[{ required: true, message: 'Пожалуйста выберите сложность!' }]}
                >
                    <Select placeholder="Выберите сложность!">
                        {levels?.length &&
                            levels.map((level: any) => {
                                return (
                                    <Select.Option key={level.id} value={level.id}>
                                        {level.level}
                                    </Select.Option>
                                );
                            })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={'Классификация'}
                    name={'classification_id'}
                    rules={[{ required: true, message: 'Пожалуйста выберите классификацию!' }]}
                >
                    <Select placeholder="Выберите классификацию!">
                        {classifications?.length &&
                            classifications.map((classif: any) => {
                                return (
                                    <Select.Option key={classif.id} value={classif.id}>
                                        {classif.classification}
                                    </Select.Option>
                                );
                            })}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button style={{ width: '40%' }} type="primary" onClick={() => onFinish(form.getFieldsValue())}>
                        Добавить вопрос
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default memo(QuestionModalAdd);
