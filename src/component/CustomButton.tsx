import { Button } from 'antd'
import React from 'react'
import { colors } from '../config/color'

interface CustomButtonProps {
    color?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    title?: string;
}

function CustomButton(props: CustomButtonProps) {
    const { color, onClick, icon, title } = props;
    const primaryColor = color || colors.primary;

    return (
        <Button htmlType='submit'  className={`rounded-[8px] h-[40px]`} style={{ backgroundColor: primaryColor, color: colors.TextColor }} onClick={onClick} icon={icon}>{title}</Button>
    )
}

export default React.memo(CustomButton)