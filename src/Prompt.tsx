import React from 'react';
import ReactDOM from 'react-dom';
import FormModal, { FormModalProps } from './FormModal';
import { Form } from 'antd';

export type PromptProp<T = any> = FormModalProps & {
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

Prompt.prompt = async (props) => {
  const { visible, onCancel, onOk, ...otherPromptProps } = props;
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const destroy = () => {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult) {
        div.parentNode?.removeChild(div);
      }
    };
    const handleCancel = async () => {
      await reject();
      destroy();
    };
    const handleOk = async (value) => {
      await resolve(value);
      destroy();
    };
    ReactDOM.render(
      React.createElement(Prompt, {
        visible: true,
        onCancel: handleCancel,
        onOk: handleOk,
        ...otherPromptProps,
      }),
      div
    );
  });
};

export default Prompt;
