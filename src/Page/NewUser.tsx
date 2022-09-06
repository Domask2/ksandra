import * as React from 'react';
import axios from 'axios';
import { Button, Col, Form, Input, Row } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NewUser = () => {
    const history = useNavigate();
    const [user, setUser] = useState<{ name: string; email: string }>({ name: '', email: '' });
    const [userArray, setUserArray] = useState<[{ name: string; email: string }] | []>([]);
    console.log(user);
    console.log(userArray);
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
                    <Link to={'/'}>HOME</Link>
                </div>

                <div style={{ marginRight: '20px', cursor: 'pointer' }}>
                    <LoginOutlined style={{ marginRight: '5px' }} />
                    <span
                        onClick={() => {
                            const instance = axios.create({
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                withCredentials: true,
                            });

                            axios.defaults.withCredentials = true;
                            instance.defaults.headers.common['Authorization'] =
                                'Bearer ' + window.localStorage.getItem('user-token');
                            instance.get('http://localhost:80/api/auth/logout').then(() => {
                                try {
                                    window.localStorage.removeItem('user-id');
                                    window.localStorage.removeItem('user-token');
                                    window.localStorage.removeItem('user-name');
                                    window.localStorage.removeItem('user-email');
                                    history('/');
                                } catch (err: any) {
                                    console.error(err);
                                }
                            });
                        }}
                    >
                        LOGOUT
                    </span>
                </div>
            </header>

            <span
                onClick={() => {
                    const email = localStorage.getItem('user-email');
                    const values = { email: email };
                    axios
                        .post('http://localhost:80/api/auth/forgot-password', values)
                        .then((res: any) => {
                            console.log(res);
                        })
                        .catch((err: any) => {
                            console.log(err.response.data);
                        });
                }}
            >
                сбросить пароль
            </span>
            <Row justify="center" style={{ marginTop: '50px' }}>
                <div>
                    {userArray &&
                        userArray.map((user, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    Name:{' '}
                                    <span
                                        style={{
                                            width: '200px',
                                            border: '1px solid lightgrey',
                                            marginLeft: '5px',
                                            marginRight: '5px',
                                            padding: '2px',
                                        }}
                                    >
                                        {user.name}
                                    </span>
                                    Email:{' '}
                                    <span
                                        style={{
                                            width: '200px',
                                            border: '1px solid lightgrey',
                                            marginLeft: '5px',
                                            marginRight: '5px',
                                            padding: '2px',
                                        }}
                                    >
                                        {user.email}
                                    </span>
                                </div>
                            );
                        })}
                    <Button
                        onClick={() => {
                            axios
                                .post('http://localhost:80/api/newUser', userArray)
                                .then((res: any) => {
                                    console.log(res);
                                })
                                .catch((err: any) => {
                                    console.log(err.response.data);
                                });
                        }}
                    >
                        отправить на создание
                    </Button>
                </div>
            </Row>

            <Row justify="center" style={{ marginTop: '100px' }}>
                <Col>
                    <Input
                        value={user.name}
                        addonBefore={'Name'}
                        onChange={(e: any) =>
                            setUser((prev) => {
                                return {
                                    name: e.target.value,
                                    email: prev.email,
                                };
                            })
                        }
                    />
                </Col>

                <Col>
                    {/*<Form.Item style={{ marginRight: '10px' }} label="Email" name="email">*/}
                    <Input
                        addonBefore={'Email'}
                        value={user.email}
                        onChange={(e: any) =>
                            setUser((prev) => {
                                return {
                                    email: e.target.value,
                                    name: prev.name,
                                };
                            })
                        }
                    />
                    {/*</Form.Item>*/}
                </Col>
                <Col>
                    <Button
                        onClick={() => {
                            if (user.name && user.email) {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                setUserArray([...userArray, user]);
                                setUser({ email: '', name: '' });
                            }
                        }}
                        style={{ marginRight: '10px' }}
                        type="primary"
                        htmlType="submit"
                    >
                        +
                    </Button>
                </Col>
            </Row>
        </>
    );
};
export default NewUser;
