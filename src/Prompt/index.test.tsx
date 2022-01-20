import { Input } from 'antd';
import React from 'react';
import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from '@testing-library/react';
import Prompt from './index';

test('test Prompt', async () => {
  const testId = 'test-input';
  const promptProps = {
    visible: false,
    title: 'Prompt',
    label: 'Price',
    initialValue: '99',
    children: <Input data-testid={testId} />,
  };
  const handleOk = jest.fn((val) => val);
  const handleCancel = jest.fn();
  const { rerender } = render(
    <Prompt {...promptProps} onOk={handleOk} onCancel={handleCancel} />
  );
  // the value of visible prop is false so Prompt is invisible
  expect(screen.queryByTestId(testId)).toBe(null);

  // set visible to true and rerender
  promptProps.visible = true;
  rerender(<Prompt {...promptProps} onOk={handleOk} onCancel={handleCancel} />);
  // Prompt become visible
  const input = screen.getByTestId(testId);
  const cancelBtn = screen.getByText('Cancel');
  const okBtn = screen.getByText('OK');
  expect(input).toBeVisible();
  expect(input).toHaveValue('99');

  // change input value to 199
  act(() => {
    fireEvent.change(input, { target: { value: '199' } });
  });
  await waitFor(() => expect(input).toHaveValue('199'));

  // click cancel button
  fireEvent.click(cancelBtn);
  expect(handleCancel).toBeCalled();

  // click ok button and return value should be 199
  act(() => {
    fireEvent.click(okBtn);
  });
  await waitFor(() => {
    expect(handleOk).toBeCalled();
    expect(handleOk.mock.results[0].value).toBe('199');
  });

  // set visible to false and rerender
  promptProps.visible = false;
  rerender(<Prompt {...promptProps} onOk={handleOk} onCancel={handleCancel} />);
  expect(screen.queryByTestId(testId)).toBe(null);
});
