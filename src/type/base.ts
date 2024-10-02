export type User = {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

export type CustomTextProps = {
    text: string
    color?: string
    fontSize?: string
    fontFamily?: string
    clasName?: string
}

export interface TableProps {
    columns: {
        title?: string;
        dataIndex?: string;
        key?: string;
        render?: (...args: any[]) => any;
    }[];
    data: any[];
}

export type CustomModalProps = {
    children: React.ReactNode
    title: string
    visible: boolean
    onCancel: () => void
    onOk: () => void
}