import * as React from 'react';
import axios from 'axios';
import { Button, Col, Form, Input, Row } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const LoginAuth = () => {
    const history = useNavigate();
    const onFinish = (values: any) => {
        axios.defaults.withCredentials = true;
        axios
            .post('http://localhost:80/api/auth/login', values)
            .then((res: any) => {
                if (res.data) {
                    console.log(res.data);
                    res.data.id && window.localStorage.setItem('user-id', res.data.id);
                    res.data.token && window.localStorage.setItem('user-token', res.data.token);
                    res.data.name && window.localStorage.setItem('user-name', res.data.name);
                    res.data.email && window.localStorage.setItem('user-email', res.data.email);
                    res.data.token && history('/');
                }
            })
            .catch((err: any) => {
                console.log(err.response.data);
            });
    };

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
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label="Device name" name="device_name" hidden={true} initialValue="fradminremote">
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};
export default LoginAuth;
