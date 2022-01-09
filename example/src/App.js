import { Prompt } from "@five-show/antd-prompt";
import { Input, Button, Space, Card } from "antd";
import React, { useState } from "react";
import './App.css';

const promptProps = {
  title: 'Prompt',
  label: 'Price',
  initialValue: 'qwer',
  children: <Input />,
  modalProps: {
    afterClose: () => {
      console.log('afterClose modal');
    },
  },
};

const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

function App() {
  const [visible, setVisible] = useState(false);
  const handleShowPromptComponent = () => {
    setVisible(true);
  };
  const handleShowPromptFunction = async () => {
    setVisible(false);
    try {
      const value = await Prompt.prompt({
        ...promptProps,
      });
      await handleOk(value);
    } catch (e) {
      console.log('prompt cancel', e);
    }
  };
  const handleShowPromptFunctionLoading = async () => {
    setVisible(false);
    try {
      await Prompt.prompt({
        ...promptProps,
        onOk: handleOk,
      });
    } catch (e) {
      console.log('prompt cancel', e);
    }
  };
  const handleOk = async (value) => {
    console.log('prompt value is ', value);
    await somethingAsync(value);
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const somethingAsync = async (value) => {
    await sleep(1000);
    console.log('async task finished', value);
  };
  return (
    <Card className="App">
      <Space>
        <Button onClick={handleShowPromptComponent}>component</Button>
        <Button onClick={handleShowPromptFunctionLoading}>function loading</Button>
        <Button onClick={handleShowPromptFunction}>function</Button>
      </Space>
      <Prompt visible={visible} onOk={handleOk} onCancel={handleCancel} {...promptProps} />
    </Card>
  );
}

export default App;
