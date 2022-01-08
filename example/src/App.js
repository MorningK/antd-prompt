import { Input } from "antd";
import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Prompt } from "@five-show/antd-prompt";

const promptProps = {
  title: 'Prompt',
  label: '确认密码',
  initialValue: 'qwer',
  children: <Input />,
};

function App() {
  const [visible, setVisible] = useState(false);
  const handleShowPromptComponent = () => {
    setVisible(true);
  };
  const handleShowPromptFunction = async () => {
    try {
      const value = await Prompt.prompt({
        ...promptProps
      });
      console.log('prompt value is ', value);
    } catch (e) {
      console.log('prompt cancel', e);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleShowPromptComponent}>using as component</button>
        <button onClick={handleShowPromptFunction}>using as function</button>
      </header>
      <Prompt visible={visible} {...promptProps} onOk={(value) => console.log('prompt value is ', value)} onCancel={() => setVisible(false)} />
    </div>
  );
};

export default App;
