import * as React from 'react';
import { memo } from 'react';
import { useActions } from '../../hooks/useActions';
import { getCategory } from '../../redux/category/category.selector';
import { getLevel } from '../../redux/level/level.selector';
import { getClassification } from '../../redux/classification/classification.selector';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Button, Form, Modal, Select, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RootState } from '../../redux/redux.store';
import { ILevel } from '../../redux/level/level.initial';
import { categoryType } from '../Category/categoryType';

const QuestionModalAdd = ({ isModalAdd, setIsModalAdd }: any) => {
    const { questionStoreAction } = useActions();
    const [form] = Form.useForm();
    const categories = useTypedSelector((state: RootState) => getCategory(state));
    const levels = useTypedSelector((state: RootState) => getLevel(state));
    const classifications = useTypedSelector((state: RootState) => getClassification(state));

    // const normFile = (e: any) => {
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e?.fileList;
    // };

    const handleOk = () => {
        setIsModalAdd(false);
    };

    const handleCancel = () => {
        setIsModalAdd(false);
    };

    const onFinish = (values) => {
        const formData = new FormData();
        values.slug && formData.append('slug', values.slug);
        values.category_id && formData.append('category_id', values.category_id);
        values.level_id && formData.append('level_id', values.level_id);
        values.classification_id && formData.append('classification_id', values.classification_id);
        values.question && formData.append('question', values.question);
        values.answer && formData.append('answer', values.answer);
        // formData.append('image', values.image && values.image[0].originFileObj);

        questionStoreAction(formData);
        setIsModalAdd(false);
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
            width={'800px'}
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
                        {Object.values(levels)?.length &&
                            Object.values(levels).map((level: ILevel) => {
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

                <Form.Item
                    label={'Slug'}
                    name={'slug'}
                    rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={'Вопрос'}
                    name={'question'}
                    rules={[{ required: true, message: 'Пожалуйста введите вопрос!' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label={'Ответ'}
                    name={'answer'}
                    rules={[{ required: true, message: 'Пожалуйста введите ответ!' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                {/*<Form.Item name="image" label="Картинка" valuePropName="fileList" getValueFromEvent={normFile}>*/}
                {/*    <Upload beforeUpload={() => false} name={'image'}>*/}
                {/*        <Button icon={<UploadOutlined />}>Загрузить изображение</Button>*/}
                {/*    </Upload>*/}
                {/*</Form.Item>*/}

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
