import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Button, Form, Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [registerMessage, setRegisterMessage] = useState('');

    const onFinish = (values: any) => {
        axios
            .post('http://localhost:80/api/auth/forgot-password', values)
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => {
                console.log(err.response.data);
            });
    };

    useEffect(() => {
        if (registerMessage) {
            setTimeout(() => {
                setRegisterMessage('');
            }, 5000);
        }
    }, [registerMessage]);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <header
                className="lcHeader"
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                    alignContent: 'center',
                    padding: '10px 20px',
                    minHeight: '70px',
                }}
            >
                <div style={{ marginRight: '20px', cursor: 'pointer' }}>
                    <LoginOutlined style={{ marginRight: '5px' }} />
                    <Link to={'/login'}>LOGIN</Link>
                </div>

                <div style={{ marginRight: '20px', cursor: 'pointer' }}>
                    <LoginOutlined style={{ marginRight: '5px' }} />
                    <Link to={'/register'}>REGISTER</Link>
                </div>
            </header>

            <Row justify="center" style={{ marginTop: '100px' }}>
                <Col>
                    {registerMessage && <p style={{ marginBottom: '20px' }}>{registerMessage}</p>}
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Отправить пароль
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};
export default ForgotPassword;
