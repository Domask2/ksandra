import * as React from 'react';
import { Button, Card, Col, Form, Input, notification, Row } from 'antd';
import { ApiApp, instance } from '../Api/Auth';
import { errorNotification, successNotification } from '../source/notification';

const Category = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);

        ApiApp.category(values).then((res) => {
            if (res.data.status === 200) {
                if (res.data.message && typeof res.data.message === 'string') {
                    successNotification('top', '', res.data.message);
                }
                form.resetFields();
            } else if (res.data.status === 400) {
                errorNotification('top', '', res.data.errors);
            }
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
                    <Card className="criclebox cardbody h-full" title={<h2>Категорий вопросов</h2>}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col xs={24} sm={24} md={24} lg={18} xl={10}>
                                <Form
                                    form={form}
                                    name="basic"
                                    initialValues={{
                                        name: '',
                                        slug: '',
                                        description: '',
                                        meta_title: '',
                                        meta_keyword: '',
                                        meta_descrip: '',
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    className="row-col"
                                    labelCol={{ span: 7 }}
                                    wrapperCol={{ span: 17 }}
                                >
                                    <Form.Item
                                        label={'Slug'}
                                        name="slug"
                                        rules={[{ required: true, message: 'Пожалуйста введите slug!' }]}
                                    >
                                        <Input placeholder="Slug" />
                                    </Form.Item>
                                    <Form.Item
                                        label={'Name'}
                                        name="name"
                                        rules={[{ required: true, message: 'Пожалуйста введите Name!' }]}
                                    >
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
                                        <Button style={{ width: '50%' }} type="primary" htmlType="submit">
                                            Добавить категорию
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Category;
