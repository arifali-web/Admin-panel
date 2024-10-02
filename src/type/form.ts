import { ChangeEventHandler } from "react";

export interface FieldConfig {
    name?: string;
    label?: string;
    type?: string;
    rules?: any[];
    options?: { label: string; value: string }[];

}

export interface DynamicFormProps {
    fields: FieldConfig[];
    form: any; // Ant Design form instance
    image?: string;
    uploadImage?: ChangeEventHandler<HTMLInputElement>; 
}