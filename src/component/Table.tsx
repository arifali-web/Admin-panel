import { Table } from 'antd';

interface TableProps {
    columns: any[];
    data: any[];
}

const CustomTable = ({ columns, data }: TableProps) => {
    return <Table className='w-full overflow-auto' scroll={{ x: 800 }} columns={columns} dataSource={data} />;
};

export default CustomTable;
