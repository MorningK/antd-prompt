import { NamePath } from 'rc-field-form/lib/interface';
import React from 'react';
import ReactDOM from 'react-dom';
import FormModal, { FormModalProps } from '../FormModal';
import { Form, Input, FormItemProps } from 'antd';

export type PromptProp<T = any> = Omit<FormModalProps, 'onOk' | 'children'> & {
  onOk?: (value: T) => Promise<any>;
  name?: NamePath;
  label?: React.ReactNode;
  required?: boolean;
  initialValue?: T;
  formItemProps?: FormItemProps;
  children?: React.ReactNode;
};

type PromptStaticFunctions = {
  prompt: (props: PromptProp) => Promise<any>;
};

const defaultChildren = <Input autoComplete="false" autoFocus allowClear />;

const Prompt: React.FC<PromptProp> & PromptStaticFunctions = ({
  onOk,
  name = 'input',
  label,
  required = true,
  initialValue,
  formItemProps,
  children = defaultChildren,
  ...otherProps
}) => {
  const handleOk = async (values) => {
    const fieldName =
      name instanceof Array ? name.flat(Infinity).join('.') : name;
    await onOk?.(values[fieldName]);
  };
  return (
    <FormModal onOk={handleOk} {...otherProps}>
      <Form.Item
        name={name}
        label={label}
        initialValue={initialValue}
        required={required}
        rules={[{ required: required }]}
        {...formItemProps}
      >
        {children}
      </Form.Item>
    </FormModal>
  );
};

Prompt.prompt = async (props) => {
  const { visible, onCancel, onOk, ...otherPromptProps } = props;
  const afterClose = otherPromptProps?.modalProps?.afterClose;
  return new Promise((resolve, reject) => {
    const container = document.createDocumentFragment();
    const destroy = () => {
      ReactDOM.unmountComponentAtNode(container);
      afterClose?.();
    };
    const handleCancel = async () => {
      await onCancel?.();
      reject();
      setTimeout(() => {
        destroy();
      });
    };
    const handleOk = async (value) => {
      await onOk?.(value);
      resolve(value);
      setTimeout(() => {
        destroy();
      });
    };
    ReactDOM.render(
      <Prompt
        visible={true}
        onOk={handleOk}
        onCancel={handleCancel}
        {...otherPromptProps}
      />,
      container
    );
  });
};

export default Prompt;
