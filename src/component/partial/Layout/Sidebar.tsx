import React from 'react'
import Sider from 'antd/es/layout/Sider';
import { renderMenu } from './sidebarLink';
import { useColors } from '../../../config/color';


function Sidebar({ collapsed, setCollapsed }: any) {
    const colors = useColors();
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            // className="bg-gray-900"
            trigger={null}
            width={235}
            style={{ backgroundColor: colors.backgroundColor, color: colors.TextColor, boxShadow: colors.boxshadow }}
        >
            <div className="text-center py-4 text-xl poppins-bold" style={{ color: colors.TextColor }}>{collapsed ? 'D' : 'Dashboard'}</div>
            {renderMenu()}
        </Sider>
    )
}

export default React.memo(Sidebar)