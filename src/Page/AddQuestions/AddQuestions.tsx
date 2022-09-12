import * as React from 'react';
import { FunctionComponent as FC } from 'react';
import { Tabs, Col, Card, Form, Button } from 'antd';
import HomeForm from './HomeForm';
import SeoTagsForm from '../Category/SeoTagsForm';
import OtherDetailsForm from '../Category/OtherDetailsForm';
import { ApiApp } from '../../Api/Auth';
import question from '../Questions/Question';

const AddQuestion: FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);

        ApiApp.questions(values).then((res) => {
            if (res.status === 200) {
                console.log(res.data.message);
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
                name="question_add_"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="row-col"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
            >
                <Tabs defaultActiveKey="1">
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
                    <Button style={{ width: '40%' }} type="primary" htmlType="submit">
                        Add Question
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddQuestion;
