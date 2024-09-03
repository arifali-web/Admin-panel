import React, { useState } from 'react';
import {
    CloseOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Drawer, Dropdown, Layout } from 'antd';
import { useColors } from '../config/color';
import { renderMenu, menu } from './sidebarLink';
import { useTheme } from '../context/Themeprovider';
import DarkModeToggle from "react-dark-mode-toggle";

const { Header, Sider, Content } = Layout;

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
    const colors = useColors();
    const [collapsed, setCollapsed] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    // Media query for responsive layout: max-width 768px (mobile)
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const { isDarkMode, toggleTheme } = useTheme() as any;

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
                        {renderMenu()}
                    </Drawer>
                </>
            ) : (
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    // className="bg-gray-900"
                    trigger={null}
                    width={235}
                    style={{ backgroundColor: colors.backgroundColor, color: colors.TextColor , boxShadow: colors.boxshadow }}
                >
                    <div className="text-center py-4 text-xl poppins-bold" style={{ color: colors.TextColor }}>{collapsed ? 'D' : 'Dashboard'}</div>
                    {renderMenu()}
                </Sider>
            )}
            <Layout style={{ backgroundColor: colors.background }}>
                <Header style={{ padding: 0, boxShadow: colors.boxshadow, backgroundColor: colors.backgroundColor }} className="flex justify-between items-center !px-6 rounded-[20px]  mx-6 mt-6 mb-8">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined style={{ color: colors.TextColor }} /> : <MenuFoldOutlined style={{ color: colors.TextColor }} />}
                        onClick={isMobile ? () => setDrawerVisible(!drawerVisible) : () => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            // width: 60,
                            height: 64,
                        }}
                    />
                    <div className='flex gap-4 items-center'>
                        <DarkModeToggle
                            onChange={() => toggleTheme()}
                            checked={isDarkMode}
                            size={50}
                        />
                        <Dropdown overlay={menu}>
                            <Avatar className="cursor-pointer" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Dropdown>
                    </div>
                </Header>
                <Content
                    style={{
                        minHeight: 280,
                        backgroundColor: colors.background,
                    }}
                    className="p-6 !min-h-screen"
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;