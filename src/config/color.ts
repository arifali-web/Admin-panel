import { useTheme } from "../context/Themeprovider";

const lightColors = {
  primary: "#5D5FEF",
  success: "#52c41a",
  warning: "#faad14",
  error: "#f5222d",
  info: "#1890ff",
  TextColor: "#000",
  SecondaryTextColor: "#ffffff",
  drawerColor: "#101826",
  boxshadow: " 0 20px 27px 0 rgba(0, 0, 0, 0.05)",
  backgroundColor: "#ffffff",
  background: "#F4F5F9",
  sidebarbtnbg: "#84668C",
};

const darkColors = {
  primary: "#5D5FEF",
  success: "#52c41a",
  warning: "#faad14",
  error: "#f5222d",
  info: "#1890ff",
  TextColor: "#ffff",
  SecondaryTextColor: "#ffffff",
  drawerColor: "#101826",
  boxshadow: " 0 20px 27px 0 rgba(0, 0, 0, 0.05)",
  backgroundColor: "#191D23",
  background: "#0D0F11",
  sidebarbtnbg: "#84668C",
};

export const useColors = () => {
  const { isDarkMode } = useTheme();
  return isDarkMode ? darkColors : lightColors;
};
