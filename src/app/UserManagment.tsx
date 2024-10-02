import React, { useState } from 'react';
import { Button, Modal, Form, Popconfirm, Typography, notification } from 'antd';
import { UserAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DynamicForm from '../component/shared/Form';
import { useColors } from '../config/color';
import CustomTable from '../component/shared/Table';
import CustomButton from '../component/shared/CustomButton';

const { Title } = Typography;

interface UserData {
    key: string;
    name?: string;
    email?: string;
    role?: string;
    image?: string;
}

const initialData: UserData[] = [
    { key: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', image: '' },
    { key: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', image: '' },
];
const field = [
    {
        name: 'image',
        label: 'Image',
        type: 'image',
        rules: [ { required: true, message: 'Please upload the user image!' } ],
    },
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        rules: [{ required: true, message: 'Please input the user name!' }],
    },
    {
        name: 'email',
        label: 'Email',
        type: 'text',
        rules: [
            { required: true, message: 'Please input the user email!' },
            { type: 'email', message: 'Please enter a valid email!' },
        ],
    },
    {
        name: 'role',
        label: 'Role',
        type: 'select',
        rules: [{ required: true, message: 'Please select the user role!' }],
        options: [
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' },
        ],
    },
];

const columns = (handleDelete: Function, showModal: Function) => [
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image: string) => image ? (
            <img src={image} alt="User" className="w-20 h-20 rounded object-cover" />
        ) : (
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <UserAddOutlined />
            </div>
        )
    },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
        title: 'Action',
        key: 'action',
        render: (record: UserData) => (
            <div className='flex gap-2'>
                <Button className='rounded-full' icon={<EditOutlined />} onClick={() => showModal(record)} />
                <Popconfirm title="Are you sure to delete this user?" onConfirm={() => handleDelete(record.key)}>
                    <Button className='rounded-full' icon={<DeleteOutlined />} danger />
                </Popconfirm>
            </div>

        ),
    },
]

const UserManagement: React.FC = () => {
    const colors = useColors();
    const [visible, setVisible] = useState<boolean>(false);
    const [editingUser, setEditingUser] = useState<UserData | null>(null);
    const [users, setUsers] = useState<UserData[]>(initialData);
    const [image, setImage] = useState<string | undefined>('');
    const [form] = Form.useForm();
    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const showModal = (user?: UserData) => {
        setEditingUser(user || null);
        setImage(user?.image || '');
        setVisible(true);
        console.log(user);
        if (user) {
            form.setFieldsValue(user);
        } else {
            form.resetFields();
        }
    };

    const handleCancel = () => {
        setVisible(false);
        setEditingUser(null);
        setImage('');
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            if (editingUser) {
                // Update existing user
                const updatedUsers = users.map(user =>
                    user.key === editingUser.key ? { ...user, ...values, image } : user
                );
                setUsers(updatedUsers);
                notification.success({
                    message: 'User Updated',
                    description: 'User details have been successfully updated.',
                });
            } else {
                // Add new user
                const newUser: UserData = {
                    key: (users.length + 1).toString(),
                    ...values,
                    image,
                };
                setUsers([...users, newUser]);
                notification.success({
                    message: 'User Added',
                    description: 'New user has been successfully added.',
                });
            }
            setVisible(false);
            setEditingUser(null);
            setImage('');
            form.resetFields();
        })
    };

    const handleDelete = (key: string) => {
        setUsers(users.filter(user => user.key !== key));
        notification.success({
            message: 'User Deleted',
            description: 'User has been successfully deleted.',
        });
    };

    const column = columns(handleDelete, showModal);

    return (
        <div className="min-h-screen bg-white lg:p-8 rounded-[30px] p-4" style={{ backgroundColor: colors.backgroundColor }}>
            <div className='flex justify-between items-center mb-4'>
                <Title level={2} className='poppins-semibold' style={{ color: colors.TextColor }}>User</Title>
                <CustomButton icon={<UserAddOutlined />} title="Add User" onClick={() => showModal()} />
            </div>
            <CustomTable columns={column} data={users} />
            <Modal
                title="Add User"
                visible={visible}
                onCancel={handleCancel}
                onOk={handleOk}
                okText="Add"
                style={{ backgroundColor: colors.backgroundColor }}
            >
                <DynamicForm fields={field} form={form} uploadImage={uploadImage} image={image} />
            </Modal>
        </div>
    );
};

export default UserManagement;
