import React, { useState } from 'react';
import { ButtonProps, Form, FormProps, Modal, ModalProps } from 'antd';

export type FormModalProps<T = any> = {
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

const FormModal: React.FC<FormModalProps<any>> = ({
  visible,
  title,
  cancelText,
  onCancel,
  okText,
  okButtonProps,
  onOk,
  addonBefore,
  addonAfter,
  modalProps,
  formProps,
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const handleFinish = async (values) => {
    setLoading(true);
    await onOk?.(values);
    setLoading(false);
  };
  return (
    <Modal
      visible={visible}
      title={title}
      onCancel={onCancel}
      cancelText={cancelText}
      okText={okText}
      okButtonProps={{
        form: 'prompt-form',
        htmlType: 'submit',
        ...okButtonProps,
      }}
      centered
      destroyOnClose
      closable={false}
      confirmLoading={loading}
      {...modalProps}
    >
      {addonBefore}
      <Form
        id="prompt-form"
        className="bg-white py-6"
        layout="vertical"
        preserve={false}
        onFinish={handleFinish}
        {...formProps}
      >
        {children}
      </Form>
      {addonAfter}
    </Modal>
  );
};

export default FormModal;
