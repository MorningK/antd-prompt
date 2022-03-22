# antd-prompt
a simple prompt for ant design
## Features
- Prompt
- FromModal
## Requirement
- react >= 16.8
- antd >= 4.0
## Install
npm
```bash
npm install @five-show/antd-prompt
```
yarn
```bash
yarn add @five-show/antd-prompt
```
## Usage
```javascript
import { Prompt } from "@five-show/antd-prompt";
```
### component
```javascript
<Prompt visible={visible} onOk={handleOk} onCancel={handleCancel} {...promptProps} />
```
### function
```javascript
const value = await Prompt.prompt({
  ...promptProps,
});
await handleOk(value);
```
or
```javascript
await Prompt.prompt({
  ...promptProps,
  onOk: handleOk,
});
```
## Example
```bash
git clone https://github.com/MorningK/antd-prompt.git
cd antd-prompt
npm install
cd example
npm install
npm run start
```
## Props
| prop          | description        | type    | default |
|---------------|--------------------|---------|---------|
| visible       | Whether the modal dialog is visible or not | boolean |    |
| title         | The modal dialog's title | ReactNode  |         |
| cancelText    | Text of the Cancel button | ReactNode  |         |
| onCancel      | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | () => void &#124; Promise<any> |         |
| okText        | Text of the OK button | ReactNode |         |
| okButtonProps | The ok button props | [ButtonProps](https://ant.design/components/button/#API) |         |
| onOk          | Specify a function that will be called when a user clicks the OK button | (value: T) => void &#124; Promise<any> |         |
| addonBefore   | The ReactNode add before Form | ReactNode |         |
| addonAfter    | The ReactNode add after Form | ReactNode |         |
| modalProps    | The modal props | [ModalProps](https://ant.design/components/modal/#API) |         |
| formProps     | The form props | [FromProps](https://ant.design/components/form/#Form) |         |
| name  | The name of Form.Item | [NamePath](https://ant.design/components/form-cn/#NamePath) |   input      | 
| label         | The label text of Form.Item | ReactNode |         |
| required  | The initialValue of Form.Item | boolean |    true     |
| initialValue  | The initialValue of Form.Item | T |         |
| formItemProps  | The props of Form.Item | [FormItemProps](https://ant.design/components/form-cn/#Form.Item) |         |
| children  | The children of Form.Item | ReactNode |   `<Input autoComplete="false" autoFocus allowClear />`     |

```typescript
export type FormModalProps<T = any> = {
  visible?: boolean;
  title?: React.ReactNode;
  cancelText?: React.ReactNode;
  onCancel?: () => void | Promise<any>;
  okText?: React.ReactNode;
  okButtonProps?: ButtonProps;
  onOk?: (values: T) => void | Promise<any>;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  children?: React.ReactNode;
  modalProps?: ModalProps;
  formProps?: FormProps;
};
export type PromptProp<T = any> = Omit<FormModalProps, 'onOk' | 'children'> & {
  onOk?: (value: T) => Promise<any>;
  name?: string;
  label?: string;
  required?: boolean;
  initialValue?: T;
  formItemProps?: FormItemProps;
  children?: React.ReactNode;
};
```
