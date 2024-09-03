import { Button } from 'antd'
import React from 'react'
import { useColors } from '../config/color'

interface CustomButtonProps {
    color?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    title?: string;
}

function CustomButton(props: CustomButtonProps) {
    const colors = useColors();
    const { color, onClick, icon, title } = props;
    const primaryColor = color || colors.primary;

    return (
        <Button htmlType='submit'  className={`rounded-[8px] h-[40px] poppins-regular text-white`} style={{ backgroundColor: primaryColor, }} onClick={onClick} icon={icon}>{title}</Button>
    )
}

export default React.memo(CustomButton)