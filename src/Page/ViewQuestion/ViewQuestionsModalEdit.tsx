import * as React from 'react';
import { FunctionComponent as FC, memo, useEffect, useState } from 'react';
import { Button, Card, Col, Form, Input, Modal, Select, Tabs } from 'antd';
import { ApiApp } from '../../Api/Auth';
import { errorNotification, successNotification } from '../../source/notification';
import HomeForm from '../AddQuestions/HomeForm';
import SeoTagsForm from '../Category/SeoTagsForm';
import OtherDetailsForm from '../Category/OtherDetailsForm';
import { initForm as init } from '../AddQuestions/AddQuestions';
import { categoryType } from '../Category/categoryType';
const { Option } = Select;

const ViewQuestionsModalEdit = ({ qustion, isModalEdit, setIsModalEdit }: any) => {
    const [categoriesList, setCategoriesList] = useState([]);
    const [form] = Form.useForm();

    useEffect(() => {
        ApiApp.allCategory().then((res) => {
            if (res.status === 200) {
                setCategoriesList(res.data.category);
            }
        });
    }, []);
    console.log(qustion);

    const handleOk = () => {
        setIsModalEdit(false);
    };

    const handleCancel = () => {
        setIsModalEdit(false);
    };

    const onFinish = (values) => {
        console.log(values);
        setIsModalEdit(false);
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
                form={form}
                name="question_add"
                onFinish={onFinish}
                // initialValues={initForm}
                onFinishFailed={onFinishFailed}
                className="row-col"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
            >
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Home" key="1">
                        <Form.Item
                            initialValue={qustion.category_id}
                            label={'Category_id'}
                            name={'category_id'}
                            rules={[{ required: true, message: 'Пожалуйста выберите категорию!' }]}
                        >
                            <Select
                                onChange={(value) => {
                                    console.log(value);
                                }}
                                placeholder="Выберите категорию!"
                            >
                                {categoriesList &&
                                    categoriesList.map((cat: categoryType) => {
                                        return (
                                            <Option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </Option>
                                        );
                                    })}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            initialValue={qustion.slug}
                            label={'Slug'}
                            name={'slug'}
                            rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}
                        >
                            <Input placeholder="Slug" />
                        </Form.Item>

                        <Form.Item
                            initialValue={qustion.name}
                            label={'Name'}
                            name="name"
                            rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>

                        <Form.Item initialValue={qustion.description} label={'Description'} name="description">
                            <Input placeholder="Description" />
                        </Form.Item>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="SEO Tags" key="2">
                        <SeoTagsForm />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Other Details" key="3">
                        <OtherDetailsForm />
                    </Tabs.TabPane>
                </Tabs>

                <Form.Item>
                    <Button style={{ width: '40%' }} type="primary" onClick={() => onFinish(form.getFieldsValue())}>
                        Add Question
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default memo(ViewQuestionsModalEdit);
