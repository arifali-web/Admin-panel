import { DashboardOutlined, UserOutlined, DollarOutlined, SettingOutlined, UserAddOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useColors } from "../../../config/color";
import { MenuProps } from 'antd';

const menuItems = [
    {
        key: '/',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
    },
    {
        key: '/usersmanagment',
        icon: <UserOutlined />,
        label: 'Users',
    },
    {
        key: '/billing',
        icon: <DollarOutlined />,
        label: 'Billing',
    },
    {
        key: '/profile',
        icon: <UserOutlined />,
        label: 'Profile',
    },
    {
        key: '/settings',
        icon: <SettingOutlined />,
        label: 'Settings',
    },
    {
        key: '/signup',
        icon: <UserAddOutlined />,
        label: 'Sign Up',
    },
    {
        key: '/login',
        icon: <LoginOutlined />,
        label: 'Login',
    },
];

export const renderMenu = () => {
    const colors = useColors();
    const location = useLocation();
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    };
    return (
        <Menu
            theme="dark"
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={['/']}
            mode="inline"
            style={{ background: colors.backgroundColor, color: colors.TextColor }}
            items={menuItems}
            onClick={onClick}
            className="poppins-regular table-dark-mode"
        />
    );
};

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