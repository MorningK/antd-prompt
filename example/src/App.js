import { Prompt } from "@five-show/antd-prompt";
import { Input, Button, Space, Card } from "antd";
import React, { useState } from "react";
import './App.css';

const promptProps = {
  title: 'Prompt',
  label: 'Price',
  initialValue: 'qwer',
  children: <Input />,
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
        ...promptProps
      });
      await somethingAsync();
      console.log('prompt value is ', value);
    } catch (e) {
      console.log('prompt cancel', e);
    }
  };
  const handleOk = async (value) => {
    console.log('prompt value is ', value);
    await somethingAsync();
    setVisible(false);
  };
  const somethingAsync = async () => {
    await sleep(1000);
  };
  return (
    <Card className="App">
      <Space>
        <Button onClick={handleShowPromptComponent}>component</Button>
        <Button onClick={handleShowPromptFunction}>function</Button>
      </Space>
      <Prompt visible={visible} onOk={handleOk} onCancel={() => setVisible(false)} {...promptProps} />
    </Card>
  );
}

export default App;
