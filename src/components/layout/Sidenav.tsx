import * as React from 'react';
import { Menu, Button } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { billing, dashboard, tables } from './template-Sidenav';
import { profile } from './template-Header';
import { useEffect, useState } from 'react';
import { ApiApp } from '../../Api/Auth';
import { categoryType } from '../../Page/Category/categoryType';

const Sidenav = ({ color }) => {
    const { pathname } = useLocation();
    const page = pathname.replace('/', '');
    const [categories, setCategories] = useState([]);
    const roles = localStorage.getItem('projects_roles');

    useEffect(() => {
        ApiApp.viewCategory().then((res) => {
            if (res.status === 200) {
                setCategories(res.data.category);
            }
        });
    }, []);

    return (
        <>
            <div className="brand">
                <img src={logo} alt="" />
                <span>QUESTIONS</span>
            </div>
            <hr />
            <Menu theme="light" mode="inline" inlineIndent={16}>
                {categories &&
                    categories.map((cat: categoryType, index) => {
                        return (
                            <Menu.Item key={index + cat.id}>
                                <NavLink to={`question/${cat.slug}`}>
                                    <span className="icon">{''}</span>
                                    <span className="label">{cat.name}</span>
                                </NavLink>
                            </Menu.Item>
                        );
                    })}
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
                {roles && roles === 'admin' && (
                    <>
                        {' '}
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
                        <Menu.SubMenu
                            key="8"
                            title={
                                <>
                                    <span
                                        className="icon"
                                        style={{
                                            background: page === 'profile' ? color : '',
                                        }}
                                    >
                                        {profile}
                                    </span>
                                    <span className="label">Questions</span>
                                </>
                            }
                        >
                            <Menu.Item key="81">
                                <NavLink to="/addQuestion">
                                    <span
                                        className="icon"
                                        style={{
                                            background: page === 'profile' ? color : '',
                                        }}
                                    >
                                        {profile}
                                    </span>
                                    <span className="label">Add Questions</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="82">
                                <NavLink to="/viewQuestion">
                                    <span
                                        className="icon"
                                        style={{
                                            background: page === 'profile' ? color : '',
                                        }}
                                    >
                                        {profile}
                                    </span>
                                    <span className="label">View Qusetion</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>{' '}
                    </>
                )}
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
