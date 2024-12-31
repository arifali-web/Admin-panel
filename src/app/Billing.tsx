import React, { useState } from "react";
import { Typography, Button, Input, Space, Popconfirm, Form } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import DynamicForm from "../component/shared/Form";
import moment from "moment";
import { useColors } from "../config/color";
import CustomButton from "../component/shared/CustomButton";
import CustomTable from "../component/shared/Table";
import CustomModal from "../component/partial/CustomModal";
import initialBillingData from "../config/dummy-data/billingdata";
// import formFields from "../config/form/billing";

const { Title } = Typography;
// const { Option } = Select;

interface BillingData {
  key: string;
  invoiceNumber: string;
  date: string;
  amount: string;
  status: string;
}

const columns = (
  handleDelete: (key: string) => void,
  showModal: (invoice: BillingData) => void
) => [
  {
    title: "Invoice Number",
    dataIndex: "invoiceNumber",
    key: "invoiceNumber",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    render: (record: BillingData) => (
      <Space size="middle">
        <Button
          className="rounded-full"
          icon={<EditOutlined />}
          onClick={() => showModal(record)}
        />
        <Popconfirm
          title="Are you sure to delete this invoice?"
          onConfirm={() => handleDelete(record.key)}
        >
          <Button className="rounded-full" icon={<DeleteOutlined />} danger />
        </Popconfirm>
      </Space>
    ),
  },
];

const Billing: React.FC = () => {
  const colors = useColors();
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedInvoice, setSelectedInvoice] = useState<BillingData | null>(
    null
  );
  const [searchText, setSearchText] = useState<string>("");
  // const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [billingData, setBillingData] =
    useState<BillingData[]>(initialBillingData);
  const [form] = Form.useForm();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // const handleStatusChange = (value: string) => {
  //   setStatusFilter(value);
  // };

  const showModal = (invoice?: BillingData) => {
    setSelectedInvoice(invoice || null);
    setVisible(true);

    if (invoice) {
      form.setFieldsValue({
        ...invoice,
        date: moment(invoice.date), // Set date as moment object for DatePicker
      });
    } else {
      form.resetFields();
    }
  };

  const handleDelete = (key: string) => {
    setBillingData(billingData.filter((invoice) => invoice.key !== key));
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedInvoice(null);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const formattedValues = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
      };
      if (selectedInvoice) {
        // Edit Invoice
        setBillingData(
          billingData.map((invoice) =>
            invoice.key === selectedInvoice.key
              ? { ...invoice, ...formattedValues }
              : invoice
          )
        );
      } else {
        // Add Invoice
        const newInvoice = {
          key: (billingData.length + 1).toString(),
          ...formattedValues,
        };
        setBillingData([...billingData, newInvoice]);
      }
      setVisible(false);
      setSelectedInvoice(null);
      form.resetFields();
    });
  };

  const filteredData = billingData.filter(
    (invoice) =>
      invoice.invoiceNumber.toLowerCase().includes(searchText.toLowerCase())
    // (statusFilter ? invoice.status === statusFilter : true)
  );

  const column = columns(handleDelete, showModal);

  return (
    <div
      className="lg:p-8 rounded-[30px] min-h-screen p-4 "
      style={{
        boxShadow: colors.boxshadow,
        backgroundColor: colors.backgroundColor,
      }}
    >
      <Title
        level={2}
        className="mb-4 poppins-semibold"
        style={{ color: colors.TextColor }}
      >
        Billing Information
      </Title>
      <div className="mb-4 flex lg:flex-row flex-col justify-between lg:items-center gap-4">
        <Space>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by invoice number"
            value={searchText}
            onChange={handleSearch}
            style={{ width: 340 }}
            className="h-[40px] rounded-[10px]"
          />
        </Space>
        <CustomButton
          icon={<PlusOutlined />}
          title="Add Invoice"
          onClick={() => showModal()}
        />
      </div>
      <CustomTable columns={column} data={filteredData} />
      <CustomModal
        visible={visible}
        onCancel={handleCancel}
        onOk={handleOk}
        title={selectedInvoice ? "Edit Invoice" : "Add Invoice"}
      >
        {/* <DynamicForm fields={formFields} form={form} /> */}
      </CustomModal>
    </div>
  );
};

export default Billing;
