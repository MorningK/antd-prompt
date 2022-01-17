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
| title         | The modal dialog's title | string  |         |
| cancelText    | Text of the Cancel button | string  |         |
| onCancel      | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | () => void &#124; Promise<any> |         |
| okText        | Text of the OK button | string |         |
| okButtonProps | The ok button props | [ButtonProps](https://ant.design/components/button/#API) |         |
| onOk          | Specify a function that will be called when a user clicks the OK button | (values: T) => void &#124; Promise<any> |         |
| addonBefore   | The ReactNode add before Form | ReactNode |         |
| addonAfter    | The ReactNode add after Form | ReactNode |         |
| modalProps    | The modal props | [ModalProps](https://ant.design/components/modal/#API) |         |
| formProps     | The form props | [FromProps](https://ant.design/components/form/#Form) |         |
| label         | The label text of Form.Item | string |         |
| initialValue  | The initialValue of Form.Item | T |         |

```typescript
export declare type FormModalProps<T = any> = {
  visible?: boolean;
  title?: string;
  cancelText?: string;
  onCancel?: () => void | Promise<any>;
  okText?: string;
  okButtonProps?: ButtonProps;
  onOk?: (values: T) => void | Promise<any>;
  addonBefore?: React.ReactElement;
  addonAfter?: React.ReactElement;
  children?: React.ReactElement;
  modalProps?: ModalProps;
  formProps?: FormProps;
};
export declare type PromptProp<T = any> = FormModalProps & {
  label?: string;
  initialValue?: T;
};
```
