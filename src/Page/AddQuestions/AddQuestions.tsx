import * as React from 'react';
import { FunctionComponent as FC, useState } from 'react';
import { Button, Card, Col, Form, Tabs } from 'antd';
import HomeForm from './HomeForm';
import SeoTagsForm from './SeoTagsForm';
import OtherDetailsForm from './OtherDetailsForm';
import { ApiApp } from '../../Api/Auth';
import { successNotification } from '../../source/notification';
import { initForm, questionType } from './type-question';
import question from '../Questions/Question';

const AddQuestion: FC = () => {
    const [form] = Form.useForm();
    const [activeTab, setActiveTab] = useState('1');

    const changeTab = (key) => {
        setActiveTab(key);
    };

    const onFinish = (values: questionType) => {
        const formData = new FormData();
        formData.append('image', values?.image && values?.image[0].originFileObj);
        formData.append('category_id', values.category_id);
        formData.append('slug', values.slug);
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('meta_title', values.meta_title);
        formData.append('meta_keyword', values.meta_keyword);
        formData.append('meta_descrip', values.meta_descrip);
        formData.append('selling_price', values.selling_price);
        formData.append('origin_price', values.origin_price);
        formData.append('quantity', values.quantity);
        formData.append('brand', values.brand);
        formData.append('featured', values.featured);
        formData.append('popular', values.popular);
        formData.append('status', values.status);

        ApiApp.questions(formData).then((res) => {
            if (res.status === 200) {
                successNotification('top', '', res.data.message);
                setActiveTab('1');
                form.resetFields();
            } else if (res.status === 422) {
                console.log(res.data.errors);
            }
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <>
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
                <Tabs activeKey={activeTab} onChange={changeTab}>
                    <Tabs.TabPane tab="Home" key="1">
                        <Col xs={24} sm={20} md={20} lg={16} xl={16}>
                            <Card style={{ padding: '20px' }}>
                                <HomeForm />
                            </Card>
                        </Col>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="SEO Tags" key="2">
                        <Col xs={24} sm={20} md={20} lg={16} xl={16}>
                            <Card style={{ padding: '20px' }}>
                                <SeoTagsForm />
                            </Card>
                        </Col>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Other Details" key="3">
                        <Col xs={24} sm={20} md={20} lg={16} xl={16}>
                            <Card style={{ padding: '20px' }}>
                                <OtherDetailsForm />
                            </Card>
                        </Col>
                    </Tabs.TabPane>
                </Tabs>

                <Form.Item>
                    <Button style={{ width: '40%' }} type="primary" onClick={() => onFinish(form.getFieldsValue())}>
                        Add Question
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddQuestion;
