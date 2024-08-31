import { DashboardOutlined, UserOutlined, DollarOutlined, SettingOutlined, UserAddOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { colors } from "../config/color";

const menuItems = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: <Link to="/"> Dashboard </Link>,
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: <Link to="/usersmanagment"> Users Management</ Link >,
    },
    {
        key: '4',
        icon: <DollarOutlined />,
        label: <Link to="/billing" > Billing </Link>,
    },
    {
        key: '5',
        icon: <UserOutlined />,
        label: <Link to="/profile" > Profile </Link>,
    },
    {
        key: '3',
        icon: <SettingOutlined />,
        label: <Link to="/settings" > Settings </Link>,
    },
    {
        key: '6',
        icon: <UserAddOutlined />,
        label: <Link to="/signup" > Sign Up </Link>,
    },
    {
        key: '7',
        icon: <LoginOutlined />,
        label: <Link to="/login" > Login </Link>,
    },
];

export const renderMenu = (
    <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ background: colors.drawerColor, color: colors.TextColor }}
        items={menuItems}
    />
);

export const menu = (
    <Menu>
        <Menu.Item key="1" icon={< UserOutlined />}>
            Profile
        </Menu.Item>
        < Menu.Item key="2" icon={< LogoutOutlined />}>
            Logout
        </Menu.Item>
    </Menu>
);