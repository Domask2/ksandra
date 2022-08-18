import * as React from "react";
import {Button, Checkbox, Form, Input, Modal} from "antd";
import {LoginOutlined} from '@ant-design/icons';

const App = () => {
    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

    const handleOk = () => {
        setIsModalVisible(false)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: any) => {
        console.log(values)
        setIsModalVisible(false)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    };

    const auth = {authenticated: false};

    return (
        <>
            <header className="lcHeader" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent: 'center',
                padding: '10px 20px',
                minHeight: '70px'
            }}>

                <div style={{right: '0px'}} onClick={() => setIsModalVisible(true)}>
                    <LoginOutlined style={{marginRight: '5px'}}/>
                    {auth.authenticated ? 'Выйти' : 'Войти в систему'}
                </div>

                <Modal title="Авторизация" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                       footer={false}>
                    <Form
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Пароль"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                            <Checkbox>Запомнить</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 8, span: 16}}>
                            <Button type="primary" htmlType="submit">
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

            </header>

        </>
    )
}

export default App;
