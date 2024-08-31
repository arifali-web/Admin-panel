import React, { useState } from 'react';
import {
    CloseOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Drawer, Dropdown, Layout } from 'antd';
import { colors } from '../config/color';
import { renderMenu, menu } from './sidebarLink';

const { Header, Sider, Content } = Layout;

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    // Media query for responsive layout: max-width 768px (mobile)
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return (
        <Layout>
            {isMobile ? (
                <>
                    <Drawer
                        title="Dashboard"
                        placement="left"
                        onClose={() => setDrawerVisible(false)}
                        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
                        visible={drawerVisible}
                        bodyStyle={{ padding: 0 }}
                        style={{ height: '100vh', width: '60%', backgroundColor: colors.drawerColor, color: colors.TextColor }}
                    >
                        {renderMenu}
                    </Drawer>
                </>
            ) : (
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    className="bg-gray-900"
                    trigger={null}
                    style={{ backgroundColor: colors.drawerColor, color: colors.TextColor }}
                >
                    <div className="!text-white text-center py-4 text-xl">{collapsed ? 'D' : 'Dashboard'}</div>
                    {renderMenu}
                </Sider>
            )}
            <Layout style={{ backgroundColor: '#F9FAFF' }}>
                <Header style={{ padding: 0, boxShadow: colors.boxshadow }} className="flex justify-between items-center bg-white !px-6 rounded-[20px]  mx-6 mt-6 mb-8">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={isMobile ? () => setDrawerVisible(!drawerVisible) : () => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            // width: 60,
                            height: 64,
                        }}
                    />
                    <Dropdown overlay={menu}>
                        <Avatar className="cursor-pointer" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        minHeight: 280,
                    }}
                    className="bg-[#F9FAFF] p-6 !min-h-screen"
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;