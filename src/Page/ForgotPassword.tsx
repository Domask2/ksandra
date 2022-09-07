import * as React from 'react';
import { Button, Form, Input, Layout, Menu, Card } from 'antd';
import { Link } from 'react-router-dom';
import { signin, signup } from './SignUp/template';
import { ApiApp } from '../Api/Auth';
const { Header, Content } = Layout;

const ForgotPassword = () => {
    const onFinish = (values: any) => {
        ApiApp.forgotPassword(values)
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <>
            <Layout className="layout-default layout-signin">
                <Header>
                    <div className="header-col header-brand">
                        <h5>QUESTIONS</h5>
                    </div>
                    <div className="header-col header-nav">
                        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/sign-up">
                                    {signup}
                                    <span>Регистрация</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/sign-in">
                                    {signin}
                                    <span>Войти</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>

                <Content className="p-0">
                    <Card
                        className="card-signup header-solid h-full ant-card pt-0"
                        title={<h5>Форма восстановления пароля</h5>}
                    >
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            className="row-col"
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Пожалуйста введите вашу почту!' }]}
                            >
                                <Input placeholder="Почта" />
                            </Form.Item>

                            <Form.Item>
                                <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                    Восстановить пароль
                                </Button>
                            </Form.Item>
                        </Form>
                        <p className="font-semibold text-muted text-center">
                            У вас уже есть аккаунт?{' '}
                            <Link to="/sign-in" className="font-bold text-dark">
                                Войти
                            </Link>
                        </p>
                    </Card>
                </Content>
            </Layout>
        </>
    );
};
export default ForgotPassword;
