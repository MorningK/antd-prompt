import { Input } from 'antd';
import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Prompt from './index';

test('test Prompt', () => {
  const promptProps = {
    visible: false,
    title: 'Prompt',
    label: 'Price',
    initialValue: '99',
    children: <Input data-testid="test-input" />,
  };
  const handleOk = jest.fn();
  const handleCancel = jest.fn();
  const { rerender } = render(
    <Prompt {...promptProps} onOk={handleOk} onCancel={handleCancel} />
  );

  expect(screen.queryByTestId('test-input')).toBe(null);

  promptProps.visible = true;
  rerender(<Prompt {...promptProps} onOk={handleOk} onCancel={handleCancel} />);
  const input = screen.getByTestId('test-input');
  const cancelBtn = screen.getByText('Cancel');
  const okBtn = screen.getByText('OK');
  expect(input).toBeVisible();
  expect(input).toHaveValue('99');

  // act(() => {
  //   fireEvent.change(input, {target: {value: '199'}});
  // });
  // expect(input).toHaveValue('199');

  fireEvent.click(cancelBtn);
  expect(handleCancel).toBeCalled();

  // fireEvent.click(okBtn);
  // expect(handleOk).toBeCalled();
});
