import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Form, Input, Layout, Menu, Card } from 'antd';
import { Link } from 'react-router-dom';
import { signin, signup } from './SignUp/template';
import { ApiApp } from '../saga/Api/Auth';

const { Header, Content } = Layout;

const ResetPassword = () => {
    const [searchParams] = useSearchParams();

    const onFinish = (values: any) => {
        values['token'] = searchParams.get('token');
        ApiApp.resetPassword(values)
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
                        title={<h5>Форма создания нового пароля</h5>}
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
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                            >
                                <Input placeholder="Пароль" />
                            </Form.Item>

                            <Form.Item
                                name="confirm_password"
                                rules={[{ required: true, message: 'Повторите ваш пароль!' }]}
                            >
                                <Input.Password placeholder="Подтвердить пароль" />
                            </Form.Item>

                            <Form.Item>
                                <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                                    Сохранить новый пароль
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
export default ResetPassword;
