import React from 'react';
import { Col, Row, Space, Tag } from 'antd';
import SalesChart from '../component/Chart';
import CustomTable from '../component/Table';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { colors } from '../config/color';

const statistics = [
    { title: "Today's Sales", value: "$53,000", change: "+30%" },
    { title: "Today's Users", value: "3,200", change: "+20%" },
    { title: "New Clients", value: "+1,200", change: "-20%" },
    { title: "New Orders", value: "$13,200", change: "+10%" },
];

interface User {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_: any, record: User) => (
            <Space size="middle">
                <a>Edit {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: User[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const Dashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
            <Row gutter={16}>
                {statistics.map((stat, index) => (
                    <Col key={index} xs={24} sm={12} lg={6}>
                        <div className='bg-white p-6 rounded-[20px] mb-6' style={{ boxShadow: colors.boxshadow }}>
                            <h2 className='text-xl font-semibold mb-4'>{stat.title}</h2>
                            <p className="text-3xl font-bold">{stat.value}</p>
                            <p className={`${stat.change.includes("-") ? "text-[#D0004B]" : "text-[#00AC4F]"} text-[16px]`}>
                                {stat.change.includes("-") ? (
                                    <span>
                                        <ArrowDownOutlined /> {stat.change}
                                    </span>
                                ) : (
                                    <span>
                                        <ArrowUpOutlined /> {stat.change}
                                    </span>
                                )}
                            </p>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Sales Chart */}
            <Row gutter={16}>
                <Col span={24}>
                    <div className='bg-white p-6 rounded-[20px] mb-6' style={{ boxShadow: colors.boxshadow }}>
                        <h2 className='text-xl font-semibold mb-4'>Sales Chart</h2>
                        <SalesChart />
                    </div>
                </Col>
            </Row>

            {/* User Table */}
            <Row gutter={16}>
                <Col span={24}>
                    <div className='bg-white p-6 rounded-[20px] mb-6' style={{ boxShadow: colors.boxshadow }}>
                        <h2 className='text-xl font-semibold mb-4'>User Table</h2>
                        <CustomTable columns={columns} data={data} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
