import React from 'react';
import ReactDOM from 'react-dom';
import FormModal, { FormModalProps } from '../FormModal';
import { Form, Input } from 'antd';

export type PromptProp<T = any> = Omit<FormModalProps, 'onOk'> & {
  onOk?: (value: T) => Promise<any>;
  label?: string;
  initialValue?: T;
};

type PromptStaticFunctions = {
  prompt: (props: PromptProp) => Promise<any>;
};

const Prompt: React.FC<PromptProp> & PromptStaticFunctions = ({
  onOk,
  label,
  initialValue,
  children,
  ...otherProps
}) => {
  const handleOk = async (values) => {
    await onOk?.(values.input);
  };
  return (
    <FormModal onOk={handleOk} {...otherProps}>
      <Form.Item
        name="input"
        label={label}
        initialValue={initialValue}
        required={true}
        rules={[{ required: true }]}
      >
        {children}
      </Form.Item>
    </FormModal>
  );
};

Prompt.defaultProps = {
  children: <Input autoComplete="false" autoFocus allowClear />,
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
