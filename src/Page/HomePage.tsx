import * as React from 'react';
import { LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const history = useNavigate();
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
                    <Link
                        to={'newUser'}
                        onClick={() => {
                            console.log('newClient');
                        }}
                    >
                        NEW USER
                    </Link>
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
                                    window.localStorage.removeItem('projects_roles');
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

            <div>Hello Home Page</div>
        </>
    );
};

export default HomePage;
