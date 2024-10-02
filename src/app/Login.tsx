import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useColors } from '../config/color';

const { Title } = Typography;

const Login: React.FC = () => {
    const colors = useColors();
    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f0f1f5]" >
            <div className="w-full max-w-md bg- p-8 rounded-[20px]" style={{ boxShadow: colors.boxshadow, backgroundColor: colors.backgroundColor }}>
                <Title level={2} className="text-center mb-6">Login</Title>
                <Form
                    name="login"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
