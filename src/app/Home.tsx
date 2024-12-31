import React from "react";
import { Row, Space, Tag } from "antd";
import SalesChart from "../component/partial/Chart";
import { useColors } from "../config/color";
import Statistics from "../component/partial/Statistics";
import { statistics } from "../config/dummy-data/home";
import { PieChart } from "react-minimal-pie-chart";
// import { useRequestHook } from '../hooks/useRequest';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
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
    title: "Action",
    key: "action",
    render: (record: any) => (
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
      <h1
        className="text-2xl roboto-semibold mb-6"
        style={{ color: colors.TextColor }}
      >
        Dashboard
      </h1>
      <Row gutter={16}>
        {statistics.map((stat) => (
          <Statistics {...stat} />
        ))}
      </Row>
      <div className="grid lg:grid-cols-2 gap-4">
        <div
          className="p-6 rounded-[20px] mb-6"
          style={{
            boxShadow: colors.boxshadow,
            backgroundColor: colors.backgroundColor,
          }}
        >
          <h2
            className="text-xl mb-4 roboto-semibold"
            style={{ color: colors.TextColor }}
          >
            Users Chart
          </h2>
          <SalesChart />
        </div>
        <div
          className="p-6 rounded-[20px] mb-6"
          style={{
            boxShadow: colors.boxshadow,
            backgroundColor: colors.backgroundColor,
          }}
        >
          <h2
            className="text-xl mb-4 roboto-semibold"
            style={{ color: colors.TextColor }}
          >
            Booking Chart
          </h2>
          <SalesChart />
        </div>
      </div>
      <div>
        <PieChart
          className="w-[400px] h-[400px]"
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
