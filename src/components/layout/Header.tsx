import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Drawer, Typography } from 'antd';
import { ApiApp } from '../../Api/Auth';
import { ButtonContainer, logsetting, profile, setting, toggler } from './template-Header';

function Header({ placement, name, onPress, handleSidenavColor, handleSidenavType }: any) {
    const { Title, Text } = Typography;

    const history = useNavigate();

    const [visible, setVisible] = useState(false);
    const [sidenavType, setSidenavType] = useState('transparent');

    const logout = () => {
        ApiApp.logout()
            .then(() => {
                window.localStorage.removeItem('user-id');
                window.localStorage.removeItem('user-token');
                window.localStorage.removeItem('user-name');
                window.localStorage.removeItem('user-email');
                history('/sign-in');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => window.scrollTo(0, 0));

    const showDrawer = () => setVisible(true);
    const hideDrawer = () => setVisible(false);

    return (
        <>
            <div className="setting-drwer" onClick={showDrawer}>
                {setting}
            </div>
            <Row gutter={[24, 0]}>
                <Col span={24} md={2} sm={2} className="header-control">
                    <Button type="link" className="sidebar-toggler" onClick={() => onPress()}>
                        {toggler}
                    </Button>
                    {/*<Breadcrumb>*/}
                    {/*    <Breadcrumb.Item>*/}
                    {/*        <NavLink to="/">Pages</NavLink>*/}
                    {/*    </Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item style={{ textTransform: 'capitalize' }}>*/}
                    {/*        {name.replace('/', '')}*/}
                    {/*    </Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    {/*<div className="ant-page-header-heading">*/}
                    {/*    <span className="ant-page-header-heading-title" style={{ textTransform: 'capitalize' }}>*/}
                    {/*        {subName.replace('/', '')}*/}
                    {/*    </span>*/}
                    {/*</div>*/}
                </Col>
                <Col span={24} md={22} sm={22} className="header-control">
                    {/*<Badge size="small" count={4}>*/}
                    {/*    <Dropdown overlay={menu} trigger={['click']}>*/}
                    {/*        <a href="#pablo" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>*/}
                    {/*            {bell}*/}
                    {/*        </a>*/}
                    {/*    </Dropdown>*/}
                    {/*</Badge>*/}
                    <Button type="link" onClick={showDrawer}>
                        {logsetting}
                    </Button>

                    <Drawer
                        className="settings-drawer"
                        mask={true}
                        width={360}
                        onClose={hideDrawer}
                        placement={placement}
                        visible={visible}
                    >
                        <div>
                            <div className="header-top">
                                <Title level={4}>
                                    Настройки
                                    <Text className="subtitle">Параметры панели инструментов.</Text>
                                </Title>
                            </div>

                            <div className="sidebar-color">
                                <Title level={5}>Цвет боковой панели</Title>
                                <div className="theme-color mb-2">
                                    <ButtonContainer>
                                        <Button type="primary" onClick={() => handleSidenavColor('#1890ff')}>
                                            1
                                        </Button>
                                        <Button onClick={() => handleSidenavColor('#52c41a')}>1</Button>
                                        <Button onClick={() => handleSidenavColor('#d9363e')}>1</Button>
                                        <Button onClick={() => handleSidenavColor('#fadb14')}>1</Button>

                                        <Button onClick={() => handleSidenavColor('#111')}>1</Button>
                                    </ButtonContainer>
                                </div>

                                <div className="sidebarnav-color mb-2">
                                    <Title level={5}>Настройки празрачности меню</Title>
                                    <ButtonContainer className="trans">
                                        <Button
                                            type={sidenavType === 'transparent' ? 'primary' : 'dashed'}
                                            onClick={() => {
                                                handleSidenavType('transparent');
                                                setSidenavType('transparent');
                                            }}
                                        >
                                            ПРОЗРАЧНЫЙ
                                        </Button>
                                        <Button
                                            type={sidenavType === 'white' ? 'primary' : 'dashed'}
                                            onClick={() => {
                                                handleSidenavType('#fff');
                                                setSidenavType('white');
                                            }}
                                        >
                                            БЕЛЫЙ
                                        </Button>
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </Drawer>
                    <Button type={'text'} onClick={logout}>
                        {profile}
                        <span>Выйти</span>
                    </Button>
                    {/*<Input className="header-search" placeholder="Type here..." prefix={<SearchOutlined />} />*/}
                </Col>
            </Row>
        </>
    );
}

export default Header;
