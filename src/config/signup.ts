// import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
// import { getFieldValue } from 'antd/lib/form/Form';


// const inputFields = [
//     {
//         name: "username",
//         rules: [{ required: true, message: 'Please input your username!' }],
//         icon: <UserOutlined /> as any,
//         placeholder: "Username"
//     },
//     {
//         name: "email",
//         rules: [{ required: true, message: 'Please input your email!' }],
//         icon: <UserOutlined />,
//         placeholder: "Email"
//     },
//     {
//         name: "phone",
//         rules: [{ required: true, message: 'Please input your phone number!' }],
//         icon: <PhoneOutlined /> ,
//         placeholder: "Phone Number"
//     },
//     {
//         name: "password",
//         rules: [{ required: true, message: 'Please input your password!' }],
//         icon: <LockOutlined />,
//         placeholder: "Password"
//     },
//     {
//         name: "confirmPassword",
//         dependencies: ['password'],
//         hasFeedback: true,
//         rules: [
//             { required: true, message: 'Please confirm your password!' },
//             {
//                 validator(_, value) {
//                     if (!value || getFieldValue('password') === value) {
//                         return Promise.resolve();
//                     }
//                     return Promise.reject(new Error('The two passwords that you entered do not match!'));
//                 }
//             }
//         ],
//         icon: <LockOutlined />,
//         placeholder: "Confirm Password"
//     }
// ];