import React, { useState } from 'react';
import { Typography, Button, Modal, Input, Space, Popconfirm, Form } from 'antd';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DynamicForm from '../component/Form';
import moment from 'moment';
import CustomButton from '../component/CustomButton';
import CustomTable from '../component/Table';
import { useColors } from '../config/color';

const { Title } = Typography;
// const { Option } = Select;

interface BillingData {
  key: string;
  invoiceNumber: string;
  date: string;
  amount: string;
  status: string;
}

const initialBillingData: BillingData[] = [
  { key: '1', invoiceNumber: 'INV12345', date: '2024-08-01', amount: '$100.00', status: 'Paid' },
  { key: '2', invoiceNumber: 'INV12346', date: '2024-08-05', amount: '$200.00', status: 'Pending' },
  { key: '3', invoiceNumber: 'INV12347', date: '2024-08-10', amount: '$300.00', status: 'Paid' },
  { key: '4', invoiceNumber: 'INV12348', date: '2024-08-15', amount: '$400.00', status: 'Pending' },
  { key: '5', invoiceNumber: 'INV12349', date: '2024-08-20', amount: '$500.00', status: 'Paid' },
  { key: '6', invoiceNumber: 'INV12350', date: '2024-08-25', amount: '$600.00', status: 'Pending' },
];

const columns = (handleDelete: (key: string) => void, showModal: (invoice: BillingData) => void) => [
  {
    title: 'Invoice Number',
    dataIndex: 'invoiceNumber',
    key: 'invoiceNumber',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: BillingData) => (
      <Space size="middle">
        <Button className='rounded-full' icon={<EditOutlined />} onClick={() => showModal(record)} />
        <Popconfirm title="Are you sure to delete this invoice?" onConfirm={() => handleDelete(record.key)}>
          <Button className='rounded-full' icon={<DeleteOutlined />} danger />
        </Popconfirm>
      </Space>
    ),
  },
];


const formFields = [
  {
    name: 'invoiceNumber',
    label: 'Invoice Number',
    type: 'text',
    placeholder: 'Enter invoice number',
    rules: [{ required: true, message: 'Please enter the invoice number' }],
  },
  {
    name: 'date',
    label: 'Date',
    type: 'date', // Assuming you want a calendar date picker
    placeholder: 'Enter date',
    rules: [{ required: true, message: 'Please enter the date' }],
  },
  {
    name: 'amount',
    label: 'Amount',
    type: 'text',
    placeholder: 'Enter amount',
    rules: [{ required: true, message: 'Please enter the amount' }],
  },
  {
    name: 'status',
    label: 'Status',
    type: 'select',
    placeholder: 'Select status',
    rules: [{ required: true, message: 'Please select a status' }],
    options: [
      { label: 'Paid', value: 'Paid' },
      { label: 'Pending', value: 'Pending' },
    ],
  },
];


const Billing: React.FC = () => {
  const colors = useColors();
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedInvoice, setSelectedInvoice] = useState<BillingData | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  // const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [billingData, setBillingData] = useState<BillingData[]>(initialBillingData);
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
        date: values.date.format('YYYY-MM-DD'),
      };
      if (selectedInvoice) {
        // Edit Invoice
        setBillingData(billingData.map(invoice =>
          invoice.key === selectedInvoice.key ? { ...invoice, ...formattedValues } : invoice
        ));
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
    })

  };

  const filteredData = billingData.filter((invoice) =>
    invoice.invoiceNumber.toLowerCase().includes(searchText.toLowerCase())
    // (statusFilter ? invoice.status === statusFilter : true)
  );

  const column = columns(handleDelete, showModal);

  return (
    <div className="lg:p-8 rounded-[30px] min-h-screen p-4 " style={{ boxShadow: colors.boxshadow , backgroundColor: colors.backgroundColor }}>
      <Title level={2} className="mb-4 poppins-semibold" style={{ color: colors.TextColor }}>Billing Information</Title>
      <div className="mb-4 flex lg:flex-row flex-col justify-between lg:items-center gap-4">
        <Space>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by invoice number"
            value={searchText}
            onChange={handleSearch}
            style={{ width: 340 }}
            className='h-[40px] rounded-[10px]'
          />
          {/* <Select
            placeholder="Filter by status"
            value={statusFilter}
            onChange={handleStatusChange}
            allowClear
            style={{ width: 200 }}
          >
            <Option value="Paid">Paid</Option>
            <Option value="Pending">Pending</Option>
          </Select> */}
        </Space>
        <CustomButton icon={<PlusOutlined />} title="Add Invoice" onClick={() => showModal()} />
      </div>
      <CustomTable columns={column} data={filteredData} />
      <Modal
        title={selectedInvoice ? "Edit Invoice" : "Add Invoice"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selectedInvoice ? "Update" : "Add"}
        destroyOnClose // Ensure modal content is cleared on close
      >
        <DynamicForm fields={formFields} form={form} uploadImage={() => { }} image={''} />
      </Modal>
    </div>
  );
};

export default Billing;
