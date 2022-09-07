import * as React from 'react';
import { Menu, Button } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { billing, dashboard, tables } from './template-Sidenav';
import { profile } from './template-Header';

const Sidenav = ({ color }) => {
    const { pathname } = useLocation();
    const page = pathname.replace('/', '');

    return (
        <>
            <div className="brand">
                <img src={logo} alt="" />
                <span>QUESTIONS</span>
            </div>
            <hr />
            <Menu theme="light" mode="inline">
                <Menu.Item key="1">
                    <NavLink to="/dashboard">
                        <span
                            className="icon"
                            style={{
                                background: page === 'dashboard' ? color : '',
                            }}
                        >
                            {dashboard(color)}
                        </span>
                        <span className="label">Dashboard</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/tables">
                        <span
                            className="icon"
                            style={{
                                background: page === 'tables' ? color : '',
                            }}
                        >
                            {tables(color)}
                        </span>
                        <span className="label">Tables</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/billing">
                        <span
                            className="icon"
                            style={{
                                background: page === 'billing' ? color : '',
                            }}
                        >
                            {billing(color)}
                        </span>
                        <span className="label">Billing</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item className="menu-item-header" key="4">
                    Пользователь
                </Menu.Item>
                <Menu.Item key="5">
                    <NavLink to="/profile">
                        <span
                            className="icon"
                            style={{
                                background: page === 'profile' ? color : '',
                            }}
                        >
                            {profile}
                        </span>
                        <span className="label">Profile</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item className="menu-item-header" key="6">
                    Админ
                </Menu.Item>
                <Menu.Item key="7">
                    <NavLink to="/category">
                        <span
                            className="icon"
                            style={{
                                background: page === 'profile' ? color : '',
                            }}
                        >
                            {profile}
                        </span>
                        <span className="label">Category</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
            <div className="aside-footer">
                <div
                    className="footer-box"
                    style={{
                        background: color,
                    }}
                >
                    <span className="icon" style={{ color }}>
                        {dashboard(color)}
                    </span>
                    <h6>Need Help?</h6>
                    <p>Please check our docs</p>
                    <Button type="primary" className="ant-btn-sm ant-btn-block">
                        DOCUMENTATION
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Sidenav;
