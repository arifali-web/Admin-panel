// CustomTable.tsx
import { Table } from "antd";
import { useColors } from "../../config/color";
import { useTheme } from "../../context/Themeprovider";
// import { TableProps } from '../../type';

const CustomTable = ({ columns, data }: any) => {
  const colors = useColors();
  const { isDarkMode } = useTheme();

  return (
    <Table
      className={`w-full overflow-auto ${isDarkMode ? "table-dark-mode" : ""}`}
      style={{
        color: colors.TextColor,
        // backgroundColor: colors.drawerColor,
        borderColor: colors.boxshadow,
      }}
      scroll={{ x: 800 }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default CustomTable;
