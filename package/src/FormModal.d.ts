import React from 'react';
import { ButtonProps, FormProps, ModalProps } from 'antd';
export declare type FormModalProps<T = any> = {
    visible?: boolean;
    title?: string;
    cancelText?: string;
    onCancel?: () => void;
    okText?: string;
    okButtonProps?: ButtonProps;
    onOk?: (values: T) => Promise<any>;
    addonBefore?: React.ReactElement;
    addonAfter?: React.ReactElement;
    children?: React.ReactElement;
    modalProps?: ModalProps;
    formProps?: FormProps;
};
declare const FormModal: React.FC<FormModalProps<any>>;
export default FormModal;
