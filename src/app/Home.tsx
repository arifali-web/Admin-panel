import React from 'react';
import { Col, Row, Space, Tag } from 'antd';
import SalesChart from '../component/partial/Chart';
import { useColors } from '../config/color';
import CustomTable from '../component/shared/Table';
import Statistics from '../component/partial/Statistics';
import { User } from '../type';
import { statistics, data } from '../config/data/home';
// import { useRequestHook } from '../hooks/useRequest';


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
        render: (record: User) => (
            <Space size="middle">
                <a>Edit {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];


const Dashboard: React.FC = () => {
    const colors = useColors();

    // useRequestHook({
    //     url: '/products',
    //     method: 'post',
    // }).withBody({
    //     title: 'test product',
    //     price: 13.5,
    //     description: 'lorem ipsum set',
    //     image: 'https://i.pravatar.cc',
    //     category: 'electronic'
    // }).call();

    return (
        <div>
            <h1 className="text-2xl poppins-semibold mb-6" style={{ color: colors.TextColor }}>Dashboard</h1>
            <Row gutter={16}>
                {statistics.map((stat) => (
                    <Statistics {...stat} />
                ))}
            </Row>

            {/* Sales Chart */}
            <Row gutter={16}>
                <Col span={24}>
                    <div className='p-6 rounded-[20px] mb-6' style={{ boxShadow: colors.boxshadow, backgroundColor: colors.backgroundColor }}>
                        <h2 className='text-xl font-semibold mb-4 poppins-semibold' style={{ color: colors.TextColor }}>Sales Chart</h2>
                        <SalesChart />
                    </div>
                </Col>
            </Row>

            {/* User Table */}
            <Row gutter={16}>
                <Col span={24}>
                    <div className='p-6 rounded-[20px] mb-6' style={{ boxShadow: colors.boxshadow, backgroundColor: colors.backgroundColor }}>
                        <h2 className='text-xl font-semibold mb-4 poppins-semibold' style={{ color: colors.TextColor }}>User Table</h2>
                        <CustomTable columns={columns} data={data} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
