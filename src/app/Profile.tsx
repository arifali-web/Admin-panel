import React from 'react';
import { Avatar, Typography, Form, Input, DatePicker } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import moment from 'moment';
import CustomButton from '../component/CustomButton';
import { colors } from '../config/color';
const { Title } = Typography;

interface ProfileProps {
    user: {
        name: string;
        email: string;
        phone: string;
        avatarUrl?: string;
        bio?: string;
        dob?: string; // Date of Birth
        location?: string;
        privacy?: boolean;
    };
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
    const onFinish = (values: any) => {
        console.log('Updated values:', values);
        // Implement the profile update logic here
    };

    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-1/2 bg-white p-8 rounded-[20px]" style={{ boxShadow: colors.boxshadow }}>
                <div className="flex items-center mb-6">
                    <Avatar
                        size={64}
                        src={user.avatarUrl}
                        icon={!user.avatarUrl && <UserOutlined />}
                        className="mr-4"
                    />
                    <div>
                        <Title level={3} className="mb-1">{user.name}</Title>
                        <Typography.Text>{user.email}</Typography.Text>
                    </div>
                </div>
                <Form
                    name="profile"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <div className='lg:grid grid-cols-2 gap-4'>
                        <Form.Item
                            name="name"
                            label="Name"
                            initialValue={user.name}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input className='h-[40px] rounded-[10px]' prefix={<UserOutlined />} placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            initialValue={user.email}
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input className='h-[40px] rounded-[10px]' prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>
                    </div>
                    <div className='lg:grid grid-cols-2 gap-4'>
                        <Form.Item
                            name="phone"
                            label="Phone"
                            initialValue={user.phone}
                        >
                            <Input className='h-[40px] rounded-[10px]' prefix={<PhoneOutlined />} placeholder="Phone" />
                        </Form.Item>
                        <Form.Item
                            name="dob"
                            label="Date of Birth"
                            initialValue={user.dob ? moment(user.dob, 'YYYY-MM-DD') : null}
                        >
                            <DatePicker
                                format="YYYY-MM-DD"
                                placeholder="Select Date of Birth"
                                style={{ width: '100%' }}
                                className='h-[40px] rounded-[10px]'
                            />
                        </Form.Item>
                    </div>
                    <Form.Item
                        name="location"
                        label="Location"
                        initialValue={user.location}
                    >
                        <Input className='h-[40px] rounded-[10px]' prefix={<GlobalOutlined />} placeholder="Location" />
                    </Form.Item>
                    <Form.Item
                        name="bio"
                        label="Bio"
                        initialValue={user.bio}
                    >
                        <Input.TextArea className='h-[40px] rounded-[10px]' placeholder="Tell us about yourself" rows={4} />
                    </Form.Item>                  
                    <Form.Item>
                        <CustomButton
                            title="Update Profile"
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Profile;
